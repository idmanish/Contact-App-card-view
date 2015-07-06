/**
 *
 * Created by: Manish on
 * Date: 7/5/2015
 * Time: 9:23 AM
 */


'use strict';
contactApp
    .controller('ContactController',['$scope','$state','contactDataService', function($scope, $state,contactDataService){
        var contacts = $scope.contacts = contactDataService.contactsData;

        $scope.selectContact = function(path,params){
            contactDataService.setCurrentContact(params.id);
            $state.go(path, params);
        }

    }]);


