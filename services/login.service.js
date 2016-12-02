/**
 * Created by franlopez on 30/11/2016.
 */

angular.module('app').factory('loginService', function ($http) {
    const endpoint = 'http://salonso.etsisi.upm.es/miw_serv/padel/conexion.php';

    return {
        login: function (userID, userPassword) {
            var requestParameters = {params: {id: userID, password: userPassword}};

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