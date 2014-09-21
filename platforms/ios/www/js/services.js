angular.module('myApp.services', [])
    .factory('cordovaReady', [function () {
        return function (fn) {
            var queue = [],
                impl = function () {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
                return impl.apply(this, arguments);
            };
        };
    }])
    .factory("ContactService", function ($rootScope, $q) {


            return {
                create: function () {
                    return navigator.contacts.create()
                },
                find: function (filter) {
                    var deferred = $q.defer();

                    var options = new ContactFindOptions();
                    options.filter = filter;
                    options.multiple = true;
                    var fields = ["displayName", "name", "addresses", "emails"];
                    navigator.contacts.find(fields, function (contacts) {
                        $rootScope.$apply(function () {
                            deferred.resolve(contacts);
                        });

                    }, function (error) {
                        $rootScope.$apply(function () {
                            deferred.reject(error);
                        });
                    }, options);

                    return deferred.promise;
                }
            };
        });
