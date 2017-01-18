/**
 * A test controller
 */
module.controller('TestCtrl', function($scope) {

    // attach variables to $scope if you want them bound to the template
    $scope.myNumber = 1;

    // likewise with functions ..
    $scope.changeValue = function() {
        // make myNumber a random value between 1 to 10
        $scope.myNumber = Math.floor(Math.random()*10+1);
    }


});