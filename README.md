 its first cut, I will improve it further.
Specially CSS part, where I have not done much till now.
There are some known issue, which needs to be fixed

Key Points:-
1) All data coming from services(applied Separation of Concern design principle, data is separated from business logic, if time permits I will get this data from firebase, so it will be persistent.)
2) Code is separated among separate modules
3) State Machine is used for routes.
4) Search feature is provided, so If contact list grows , particular user can be searched.
5) Main page is divided in 3 views using ui-view & $stateprovider
6) Data is injected as dependency in controllers


Demo: http://redmart-test.herokuapp.com/#/contacts