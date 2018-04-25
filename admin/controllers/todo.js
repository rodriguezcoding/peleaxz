var url = window.location.pathname;
var modelName = url.substring(url.lastIndexOf('/') + 1);

app.controller(modelName + 'Controller', function ($scope, $http) {
    $scope.model = {};
    basicMethods($scope, $http, modelName);
    $scope.after = function () {
        $scope.todo.list(function (data) {
            $scope.todos = data;
        });
    };
    $scope.after();
});