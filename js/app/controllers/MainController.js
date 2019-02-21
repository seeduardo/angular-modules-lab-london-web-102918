function MainController($scope) {
  $scope.name = 'whatever your stupid name is!';
};

angular
  .module('app')
  .controller('MainController', MainController);
