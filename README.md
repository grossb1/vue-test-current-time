# vue-test-wp-simple

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
Here is a very basic usage:

<html>
   
    <link rel="icon" href="/node_modules/vue-test-current-time/logo.png">
     <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.timeZoneChanged = function(tz) {
            alert("Time-zone updated to: " + tz);
            }

            document.buttonClicked = function(tz, event) {
            alert("Button clicked: Current time-zone: " + tz);
            }
        })

  </script>
    <title>VUE-NPM-TEST</title>
    <head>
        <meta charset="utf-8">
        <title>vue-test-current-time</title>
    </head>
    <body>
        <div id="app">
            <current-time selected="Africa/Accra" time-zone-changed="document.timeZoneChanged" button-clicked="document.buttonClicked"></current-time>
        </div>
    </body>
     <script src="/node_modules/vue-test-current-time/build.js"></script>
</html>