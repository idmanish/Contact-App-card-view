/**
 *
 * Created by: Manish on
 * Date: 7/5/2015
 * Time: 9:23 AM
 */


'use strict';
contactApp
    .controller('EditController',['$scope','contactDataService',function($scope,contactDataService){
        $scope.contact = contactDataService.getCurrentContact();

    }]);


