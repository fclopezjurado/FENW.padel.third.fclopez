/**
 * Created by fran lopez on 28/11/2016.
 *
 * CommonJS file to define the angular module for our application.
 * This module has 'ngRoute' and 'angularCSS' modules as dependencies.
 */

var mainApplicationModuleName = 'app';

angular.module(mainApplicationModuleName, ['ngRoute', 'angularCSS']);

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName]);
});

