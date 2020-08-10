# SerenitySkins

_**Serenity Sking Spa ** Serenity Skin Spa is a where all your beauty dreams come true. We specialize in meical massages facials, botox and many other services ._


<br>

## MVP

_The **Serenity Skins Spa** This website allows users to sign up and manage appointments. Once they signup with their email they can add services this company provides. They will be able to create appoinments on whatever date they want. They will be able to delete, update and review the service they selected.._

<br>

### Goals

- Allow customers to create a profile_
- Customers will be able to view provided services._
- Customers will be able to select services and view them individually alog with prices._
- Customers will be able to remove and services update the services selected._


<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Build encapsulated components that manage their own state._ |
|      Axios      | _Promise-based HTTP client for Javascript._ |
|   React Router   | _Collection of navigational components that compose declaratively with your application._ |
| CSS | _Cascading Style Sheets is a style sheet language used for describing the presentation of a document._ |
|     Ruby on Rails      | _Ruby on Rails, is a server-side web application framework._ |


<br>

### Client (Front End)

#### Wireframes


https://wireframe.cc/PUwm75

- Desktop Landing

https://wireframe.cc/6OmKy2

- Desktop Hero

https://wireframe.cc/lBTUEh

- Resource Index

https://wireframe.cc/OqJUXd

- Resource Show

https://wireframe.cc/uEBxCX

- Create Appointment

https://wireframe.cc/yOq7cL

- Update and Delete Appointment



- Tablet Resource Index

https://wireframe.cc/qF656C

- Mobile Resource Index

#### Component Tree

https://drive.google.com/file/d/1JqhojbjRlBkTxTHOlwnHUytFNUxsjRZl/view

#### Component Hierarchy


``` structure

src
|__ components/
      |__ CreateAppointment
      |__ DeleteAppointment  
      |__ UpdateAppointment 
      |__ ShowAppointment 
      |__ ShowAppointments 
      |__ ShowServices
      |__ Main  
      |__ Login
      |__ Navigation Bar
      |__ mockups
|__ services/
      |__ api-helper.js
      |__ auth.js 
      |__ appointment.js
      |__ services.js 
|__ services/

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the name and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about us and a link to FAQS._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| ReadMe    |    M     |     2 hrs      |     2 hrs     |    TBD    |
| Schema   |    H     |     3 hrs      |     3 hrs     |    TBD    |
| API|    H     |     5 hrs      |     5 hrs     |    TBD    |
| Back-End CRUD functionality    |    H     |     2 hrs      |     2 hrs     |    TBD    |
| Create all componets |    M     |     2 hrs      |     2 hrs     |     TBD     |
| component functionality  |    H     |     7 hrs      |     7 hrs     |     TBD     |
| CSS |    H     |     5 hrs      |     5 hrs     |     TBD     |
| Review Function  |    M     |     3 hrs      |     3 hrs     |    TBD    |
| Review CSS and responsiveness    |    M     |     3 hrs      |     3 hrs     |    TBD    |
| TOTAL               |          |     31 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1t1wmLFiidZLxloW2hx20aUWmXOqyuUwU/view

<br>

***

## Post-MVP

-For Post MVP I would like to add customer testimonials and pictures if available. I would like to link a instagram account to the website as well as other social media platforms.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
