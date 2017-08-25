import Vue from 'vue'
import CurrentTime from './CurrentTime.vue'

Vue.component('current-time', CurrentTime);

window.app = new Vue({
  el: '#app'
})
