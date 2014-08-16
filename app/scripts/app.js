'use strict';

/**
 * @ngdoc overview
 * @name sportsstoreAppApp
 * @description
 * # sportsstoreAppApp
 *
 * Main module of the application.
 */
angular
  .module('sportsStore', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'customFilters',
    'cart'
  ])
  .config(function ($routeProvider) {
    $routeProvider.when("/complete", {
      templateUrl: "scripts/views/thankYou.html"
    });
    $routeProvider.when("/placeorder", {
      templateUrl: "scripts/views/placeOrder.html"
    });
    $routeProvider.when("/checkout", {
      templateUrl: "scripts/views/checkoutSummary.html"
    });
    $routeProvider.when("/products", {
      templateUrl: "scripts/views/productList.html"
    });
    $routeProvider.otherwise({
      templateUrl: "scripts/views/productList.html"
    });
  });






















