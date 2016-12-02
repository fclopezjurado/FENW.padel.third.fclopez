/**
 * Created by fran lopez on 01/12/2016.
 */

angular.module('app').factory('checkUserNameService', function ($http) {
    const endpoint = 'http://salonso.etsisi.upm.es/miw_serv/padel/username.php';

    return {
        checkUserName: function (userName) {
            var requestParameters = {params: {username: userName}};

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