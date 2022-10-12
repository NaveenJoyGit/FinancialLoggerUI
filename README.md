# FinancialLoggerUi

This is the front-end code for <https://github.com/NaveenJoyGit/FinancialLogger> written using Angular framework

## Features

Login page provides user with a materail design form to login with existing credentials, or users can sign up<br/>
Signup page allows user to register as a new user. This includes validation to check if user is already registered. This user can then login using the registered usernam and password.
All forms are properly validated, ensuring only proper data is sent to backend services

![image](https://user-images.githubusercontent.com/79571862/189484135-8cb7c91c-738b-48db-9edf-a19621685ad1.png)


The application Contains intuitive  and validated form for a user to input details about their trades.
This includes buy-price, buy-date, buy-price, reason for buy. User is able to choose the type of trade (SWING, INTRADAY, OPTIONS etc.) <br/>
Stock name is validated using an async validator by calling the backend service

![image](https://user-images.githubusercontent.com/79571862/189484236-dfe14786-0538-41c5-b5e6-e1b008ce17cf.png)

<br/>
As and when the stock name is validated via the custom validator, the buy-price field is automatically updated. This is achieved using BehaviourSubject, buy storing the stok details on the call to validate stock-name (this call contains buy price as well in its response) <br/><br/>

![image](https://user-images.githubusercontent.com/79571862/189484440-08f40563-e148-4b4d-82e4-110decafa866.png)


View Trade tab dispalys all the trades of the user in a tabular structure displaying key informations including trade-value, current-stock-price, percentage-change etc.

## Dependecies

* AngularMaterial
* Bootstrap
* angular-jwt

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

