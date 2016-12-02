/**
 * Created by fran lopez on 01/12/2016.
 */

angular.module('app').controller('SignUpController',
    function ($scope, checkUserNameService, checkUserMailService, signUpService) {
        const errorWord = 'ERROR. ';
        const userNameIsEmpty = 'El campo \'Usuario\' no puede estar vacío';
        const userEmailIsEmpty = 'El campo \'Correo\' no puede estar vacío';
        const passwordsAreDifferent = 'Las dos contraseñas introducidas deben ser iguales';
        const badRequest = 'Fallo del servidor';
        const serverResponseUserNameOrMailExists = 'no error';
        const serverResponseUserNotRegistered = 'error en registro';
        const userHasBeenRegistered = 'El usuario ha sido registrado satisfactoriamente';

        var vm = this;

        vm.checkUserName = function () {
            if ((vm.username !== undefined) && (vm.username !== null) && (vm.username.length > 0)) {
                vm.formError = null;
                vm.requestToCheckUserName(checkUserNameService, vm.username);
            }
            else {
                vm.username = null;
                vm.formError = errorWord + userNameIsEmpty;
            }
        };

        vm.requestToCheckUserName = function (checkUserNameService, userName) {
            var serverResponseBody;

            checkUserNameService.checkUserName(userName).then(function (serverResponse) {
                serverResponseBody = angular.fromJson(serverResponse.data);

                if ((serverResponseBody.errorMessage !== undefined)
                    && (serverResponseBody.errorMessage !== serverResponseUserNameOrMailExists)) {
                    vm.username = null;
                    vm.formError = errorWord + serverResponseBody.errorMessage;
                }
                else if (serverResponseBody.errorMessage === undefined) {
                    vm.username = null;
                    vm.formError = errorWord + badRequest;
                }
            }, function () {
                vm.username = null;
                vm.formError = errorWord + badRequest;
            });
        };

        vm.checkUserMail = function () {
            if ((vm.email !== undefined) && (vm.email !== null) && (vm.email.length > 0)) {
                vm.formError = null;
                vm.requestToCheckUserMail(checkUserMailService, vm.email);
            }
            else {
                vm.email = null;
                vm.formError = errorWord + userEmailIsEmpty;
            }
        };

        vm.requestToCheckUserMail = function (checkUserMailService, userMail) {
            var serverResponseBody;

            checkUserMailService.checkUserMail(userMail).then(function (serverResponse) {
                serverResponseBody = angular.fromJson(serverResponse.data);

                if ((serverResponseBody.errorMessage !== undefined)
                    && (serverResponseBody.errorMessage !== serverResponseUserNameOrMailExists)) {
                    vm.email = null;
                    vm.formError = errorWord + serverResponseBody.errorMessage;
                }
                else if (serverResponseBody.errorMessage === undefined) {
                    vm.email = null;
                    vm.formError = errorWord + badRequest;
                }
            }, function () {
                vm.email = null;
                vm.formError = errorWord + badRequest;
            });
        };

        vm.signUp = function () {
            if ((vm.password !== undefined) && (vm.repeatedPassword !== undefined) && (vm.password !== null)
                && (vm.repeatedPassword !== null) && (vm.password === vm.repeatedPassword)) {
                vm.formError = null;
                vm.requestToSignUp(signUpService);
            }
            else
                vm.formError = errorWord + passwordsAreDifferent;
        };

        vm.requestToSignUp = function (signUpService) {
            var serverResponseBody;

            signUpService.signUp(vm.username, vm.email, vm.password, $scope.formatDate(vm.birthDate)).then(
                function (serverResponse) {
                    serverResponseBody = angular.fromJson(serverResponse.data);

                    if (serverResponseBody.errorMessage !== undefined) {
                        if (serverResponseBody.errorMessage === serverResponseUserNotRegistered)
                            vm.formError = errorWord + serverResponseBody.errorMessage;
                        else
                            vm.formError = userHasBeenRegistered;
                    }
                    else if (serverResponseBody.errorMessage === undefined) {
                        vm.formError = errorWord + badRequest;
                    }
                }, function () {
                    vm.formError = errorWord + badRequest;
                });
        };
    });