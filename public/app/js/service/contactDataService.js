/**
 *
 * Created by: Manish on
 * Date: 7/5/2015
 * Time: 9:22 AM
 */


'use strict';
contactApp
    .factory('contactDataService', function () {
        var contacts =
            [
                {
                    id: 1,
                    name : 'Manish',
                    tel: '+91 9620207851',
                    email: 'idmanish@gmail.com'
                },
                {
                    id: 2,
                    name : 'Burhan',
                    tel: '+91 9620207000',
                    email: 'Burhan@redmart.com'
                },
                {
                    id: 3,
                    name : 'Ritu',
                    tel: '+91 9187748199',
                    email: 'rituTest@redmart.com'
                },
                {
                    id: 4,
                    name : 'Test User',
                    tel: '+91 7029895145',
                    email: 'testuser@gmail.com'
                },
                {
                    id: 5,
                    name : 'Redmart Admin',
                    tel: '+91 3182926700',
                    email: 'admin@redmart.com'
                },
                {
                    id: 6,
                    name : 'Sanjeev',
                    tel: '+91 8035579815',
                    email: 'sanjeev@redmart.com'
                }
            ]
        ;
        var currentContact;
        function getCurrentContact(){
            return currentContact;
        }

        function setCurrentContact(id){
            for(var i=0;i<contacts.length;i++){
                if(contacts[i]["id"]===id){
                    currentContact = contacts[i];
                }
            }
        }

        function indexOf(id){
            var index = -1;
            for(var i=0;i<contacts.length;i++){
                if(contacts[i]["id"]===id){
                    index = i;
                }
            }
            return index;
        }

        function addContact(contact){
            var index = indexOf(contact.id);
            if(index>=0){
                contacts.splice(index,1,contact);
            }else{
                contacts.push(contact);
            }
        }

        function deleteContact(id){
            for(var i=0;i<contacts.length;i++){
                if(contacts[i]["id"]===id){
                    contacts.splice(i,1);
                }
            }
        }

        return {
            contactsData: contacts,
            setCurrentContact: setCurrentContact,
            getCurrentContact: getCurrentContact,
            addContact:addContact,
            deleteContact:deleteContact
        }
    });