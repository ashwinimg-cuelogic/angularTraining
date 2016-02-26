myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL',
    function($rootScope, $firebaseAuth, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        return {
            login: function(user) {
                $rootScope.message = 'welcome '+ user.email;
            },
            register: function(user) {
                auth.$createUser({
                    email: user.email,
                    password: user.password
                }).then(function(regUser){
                    $rootScope.message = 'welcome '+ user.email;
                }).catch(function(err) {
                    $rootScope.message = err.message;
                });
            }

        }
}])