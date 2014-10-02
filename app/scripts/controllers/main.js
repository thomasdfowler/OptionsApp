'use strict';

/**
 * @ngdoc function
 * @name optionsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the optionsAppApp
 */
angular.module('optionsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
