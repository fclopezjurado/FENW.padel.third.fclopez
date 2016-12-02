/**
 * Created by fran lopez on 28/11/2016.
 *
 * CommonJS file to define an angularJS controller for 'login' view.
 * The main functionality of this controller is the server request to login.
 *
 * For it, the controller uses two functions. The 'login' function catch the information from the view and
 * 'requestToLogin' function calls to 'loginService' angularJS service to do the request.
 */

angular.module('app').controller('LoginController',
    function ($scope, loginService) {
        const errorWord = 'ERROR. ';
        const errorMessage = 'Los campos \'Usuario\' y \'Correo\' no pueden estar vacíos';
        const badRequest = 'Fallo del servidor';
        const serverResponseError = 'none';
        const serverResponseToken = 'token';

        var vm = this;

        vm.login = function () {
            if (((vm.username !== undefined) && (vm.username.length > 0)) || ((vm.email !== undefined)
                && (vm.email.length > 0))) {
                vm.formError = null;

                if (vm.username !== undefined)
                    vm.requestToLogin(loginService, vm.username);
                else
                    vm.requestToLogin(loginService, vm.email);
            }
            else
                vm.formError = errorWord + errorMessage;
        };

        vm.requestToLogin = function (loginService, userID) {
            var serverResponseBody;

            loginService.login(userID, vm.password).then(function (serverResponse) {
                serverResponseBody = angular.fromJson(serverResponse.data);

                if (serverResponseBody.errorMessage !== undefined) {
                    if (serverResponseBody.errorMessage === serverResponseError) {
                        $scope.changeLabelOfLoginNavButton();
                        console.log(serverResponse.headers(serverResponseToken));
                    }
                    else
                        vm.formError = errorWord + serverResponseBody.errorMessage;
                }
                else
                    vm.formError = errorWord + badRequest;
            }, function () {
                vm.formError = errorWord + badRequest;
            });
        }
    });
