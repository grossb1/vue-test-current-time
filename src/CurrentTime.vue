<template v-cloak>
  <div id="current-time">
      The current time in {{tz}} is: {{hours}}:{{minutes}}:{{seconds}}
      <br />
      <select v-model="tz">
      <option v-for="option in tzlist">
        {{ option }}
      </option>
      
</select>
  <button @click="handleClick($event)">Click me!</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    timeZoneChanged: {
      type: String
    },
    buttonClicked: {
      type: String
    },
    selected: {
      type: String,
      default: "America/Phoenix"
    }
  },
  name: 'current-time',
  data: function() {
     return {
            tz: this.selected,
            tzlist: [],
            hours: "00",
            minutes:"00",
            seconds:"00"
     }   
  },
  mounted: function() {
    axios.get("https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=all")
          .then(response => {
            this.tzlist = Object.keys(response.data);
            this.getTime(this.tz);
          })
    
  },
  methods: {
    getTime: function(zone) {
      axios.get("https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=" + zone)
          .then(response => {
          this.hours = response.data.hours;
          this.minutes = response.data.minutes;
          this.seconds = response.data.seconds;
      })
    },
    handleClick: function(event) {
      if(this.buttonClicked) {
        eval(this.buttonClicked)(this.tz, event);
      }
    },
    handleTimeZoneChanged: function() {
      if(this.timeZoneChanged) {
        eval(this.timeZoneChanged)(this.tz);
      }
    },
    raiseAlert: function() {
      alert("responding to external button click")
    }
  },
  watch: {
    tz: function() {
      this.getTime(this.tz);
        this.handleTimeZoneChanged();
    }
  }
}
</script>

<style>
#current-time {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

select {
  border-radius: 5px;
}
</style>
