/**
 *
 * Created by: Manish on
 * Date: 7/5/2015
 * Time: 9:23 AM
 */


'use strict';
contactApp
    .controller('NewController', ['$scope','$location', 'contactDataService', function ($scope,$location, contactDataService) {
        $scope.contact = {isNew: true, email: '',tel:''};
        $scope.save = function () {
            contactDataService.addContact($scope.contact);
            $location.path('contacts');
        }
    }]);


