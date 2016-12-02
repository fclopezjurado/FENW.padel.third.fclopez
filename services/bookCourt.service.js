/**
 * Created by fran lopez on 02/12/2016.
 */

angular.module('app').factory('bookCourtService', function ($http) {
    const endpoint = 'http://salonso.etsisi.upm.es/miw_serv/padel/disponibilidad.php';

    return {
        bookCourt: function (dateToBook) {
            var requestParameters = {params: {day: dateToBook}};

            return $http.get(endpoint, requestParameters)
                .then(function (result) {
                        return result;
                    },
                    function (result) {
                        return result;
                    });
        }
    }
});