# vue-test-current-time

> A Vue.js project

## Build Setup

``` bash
# install dependencies
add this package to your package.json: https://www.npmjs.com/package/vue-test-current-time
npm install

# Example
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