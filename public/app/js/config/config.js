'use strict';

contactApp
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/unsupportedroute');
            $stateProvider.state('contacts', {
                url: "/contacts",
                abstract:true,
                views: {
                    "" : {
                        template: "</div><div ui-view/>"
                    },
                    "header": {
                        templateUrl: "app/js/templates/header.html"
                    },
                    "footer":{
                        templateUrl: "app/js/templates/footer.html"
                    }
                }
            }).state('contacts.list', {
                    url: "",
                    views: {
                        "": {
                            templateUrl: "app/js/views/contacts.html",
                            controller : 'ContactController'
                        }
                    }
            }).state('contacts.edit', {
                url: "/edit/:id",
                views: {
                    "": {
                        templateUrl: "app/js/views/editContact.html",
                        controller: 'EditController',
                        params: ['id']
                    }
                }
            }).state('contacts.new', {
                    url: "/new",
                    views: {
                        "": {
                            templateUrl: "app/js/views/editContact.html",
                            controller: 'NewController'
                        }
                    }
            });
        }
]);

