/**
 * Created by fran lopez on 01/12/2016.
 */

angular.module('app').factory('checkUserMailService', function ($http) {
    const endpoint = 'http://salonso.etsisi.upm.es/miw_serv/padel/email.php';

    return {
        checkUserMail: function (userMail) {
            var requestParameters = {params: {email: userMail}};

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