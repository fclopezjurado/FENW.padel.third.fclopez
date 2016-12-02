/**
 * Created by fran lopez on 30/11/2016.
 *
 * CommonJS file to define an angularJS controller for 'index' view.
 *
 * This controller only manages events and changes in 'index' view.
 * Is used to change the label of 'login' navigation button and format dates.
 */

angular.module('app').controller('IndexController',
    function ($rootScope) {
        const login = 'Login';
        const logout = 'Logout';

        var vm = this;

        vm.login = login;

        $rootScope.changeLabelOfLoginNavButton = function () {
            vm.login = (vm.login === login) ? logout : login;
        };

        $rootScope.formatDate = function(dateToFormat) {
            var dateInArrayFormat, dateObject;

            if ((dateToFormat !== undefined) && (dateToFormat !== null)) {
                dateInArrayFormat = dateToFormat.split("/");
                dateObject = new Date(dateInArrayFormat[2], dateInArrayFormat[1] - 1, dateInArrayFormat[0]);
                return dateObject.getTime();
            }

            return 0;
        }
    });
