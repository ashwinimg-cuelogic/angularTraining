myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL',
    function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        auth.$onAuth(function(authUser){
            if (authUser) {
                var userRef = new Firebase(FIREBASE_URL+ 'users/' + authUser.uid);
                var userObj = $firebaseObject(userRef);
                $rootScope.currentUser = userObj;
            } else {
                $rootScope.currentUser = '';
            }
        });

        return {
            login: function(user) {
                auth.$authWithPassword({
                    email: user.email,
                    password: user.password
                }).then(function(regUser){
                    $location.path('/list');
                }).catch(function(err) {
                    $rootScope.message = err.message;
                });
            },
            logout: function() {
                return auth.$unauth();
            },
            register: function(user) {
                auth.$createUser({
                    email: user.email,
                    password: user.password
                }).then(function(regUser){
                    $rootScope.message = 'welcome '+ user.email;

                    //put the data in firebase database
                    var regRef = new Firebase(FIREBASE_URL+ 'users')
                        .child(regUser.uid)
                        .set({
                            date:Firebase.ServerValue.TIMESTAMP,
                            regUser:regUser.uid,
                            firstname:user.firstName,
                            lastname:user.lastName,
                            email:user.email
                        })

                }).catch(function(err) {
                    $rootScope.message = err.message;
                });
            }

        }
}])