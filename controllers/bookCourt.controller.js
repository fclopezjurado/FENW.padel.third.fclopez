/**
 * Created by fran lopez on 02/12/2016.
 */

/**
 * Created by fran lopez on 01/12/2016.
 */

angular.module('app').controller('BookCourtController',
    function ($scope, bookCourtService) {
        const errorWord = 'ERROR. ';
        const badRequest = 'Fallo del servidor';
        const wrongDateToBookCourt = "Fecha para reserva de pista inválida";
        const serverResponseError = 'null';

        var vm = this;
        vm.books = [];

        vm.bookCourt = function () {
            var serverResponseBody;

            bookCourtService.bookCourt($scope.formatDate(vm.dateToBookCourt)).then(function (serverResponse) {
                serverResponseBody = angular.fromJson(serverResponse.data);

                if (serverResponseBody !== undefined) {
                    if (serverResponseBody === serverResponseError)
                        vm.formError = errorWord + wrongDateToBookCourt;
                    else
                        vm.books = serverResponseBody;
                }
                else
                    vm.formError = errorWord + badRequest;
            }, function () {
                vm.formError = errorWord + badRequest;
            });
        };
    });