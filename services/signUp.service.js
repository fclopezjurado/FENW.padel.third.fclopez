/**
 * Created by fran lopez on 01/12/2016.
 */

angular.module('app').factory('signUpService', function ($http) {
    const endpoint = 'http://salonso.etsisi.upm.es/miw_serv/padel/usuario.php';

    return {
        signUp: function (userName, userMail, userPassword, userBirthDate) {
            var requestParameters = {params: {username: userName, email: userMail, password: userPassword,
                birthDate: userBirthDate}};

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