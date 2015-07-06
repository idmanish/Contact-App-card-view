/**
 *
 * Created by: Manish on
 * Date: 7/5/2015
 * Time: 9:23 AM
 */


'use strict';
contactApp
    .controller('EditController',['$scope','$location','contactDataService',function($scope,$location,contactDataService){
        $scope.contact = contactDataService.getCurrentContact();
        contactDataService.addContact($scope.contact);
        $scope.save = function () {
            contactDataService.addContact($scope.contact);
            $location.path('contacts');
        }

    }]);


