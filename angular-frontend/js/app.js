// these are intentionally global (by not prefixing with var), as we need to access them elsewhere
app = angular.module('MyApp', [
    'MyApp.controllers'
]);

// if you install additional dependencies, you should declare them in the array below, as well
// as including their script file(s)
module = angular.module('MyApp.controllers', [

]);