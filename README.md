# KidCademy: Master Classes for kids

This is My Final Project for Concordia Bootcamp which is parent can get master classes for their kids

Live demo: https://kidcademy.netlify.app/

![image](https://user-images.githubusercontent.com/78935540/125161214-0a83ae00-e14f-11eb-9afc-7a889b04c15c.png)


[![Alt text](https://img.youtube.com/vi/hMQj7BsgvHQ/0.jpg)](https://www.youtube.com/watch?v=hMQj7BsgvHQ)



# Tehnologies Used

* MongoDB
* Node.js
* Express.js
* React.js
* Styled-Components

# What is implemented in this project

## HomePage

you can browse kidCademy and buy classes as a guest. In the HomePage you'll different categories of Classes. Each one of them lead you to Classes of that category. Also, you will see a list of featured classes.

## Classes Page

In this page you can see all of the classes available an filter them by category. 
We tried to have the best instractors in the history of humanity. the downside is that some of them are not alive. But don't worry. We made it possible for you to filter only alive ones! 
Also you can sort them by price (low to high and high to low) as well as alphabetically (ascending and descending).


## Class Page

In the class page you will find more information about the class as well as the reviews given to that class by past users. And if you like that class you can click on buy button whcih leads you to checkout page.

## CheckOut Page

Here you can fill the checkout form with your information to buy the class. The class will be assign to the user who has the same email. 

## Login Page

Here you can create an account as a user (not admin or instructor) with you google account. After that you can signin with your google acount. 

## User Dashboard (My Classes)

in user dashboar, user can see a list of classes he/she has bought. Also user can write a review for those classes and rate them. 

## Instractor Dashboard

Instructors are preregistered in database. when instuctor login he/she will see instactor badge beside his/her name and can access to instructor dashboard. In the instructor dashboard, the teacher sees a list of all users who bought his/her clsass. Also the teacher can edit all of the class info and update it in the database.

## Admin Dashboard

Admins like instructors are preregistered in the databse. In the admin dashboard, admin sees all the class purchases by all users and delete (cancel) any of class purchases . Also admin can select any class and edit any information of that class.



# Server Endpoints 

| Endpoint      | HTTP Method | Description |
| ----------- | ----------- | ----------- |
| /api/categories | GET | fetches all the categories from database |
| /api/tutors | GET | fetches all the tutors (classes) from database |
| /api/tutors/:username | GET | fetches a tutor (class) with a specific username |
| /api/tutors/:tutorUsername/update | PATCH | updates a tutor (class) information |
| /api/tutors/:tutorUsername/add-review| PATCH | add an ananymus review for a tutor (class) with specific username |
| /api/orders | GET | fetches all class purchases by all users |
| /api/orders/:tutorUsername | GET | fetches all class purchases from a specific tutor (class) by all users  |
| /api/orders/email/:email | GET | fetches all class purchases from all tutors (classes) by a user with an specific email |
| /api/orders/:tutorUsername | POST | create an class purchase from an specific tutor (class) |
| /api/orders/:orderId/delete | DELETE | deeltes a class purchase with an specific orderId |

# Dependencies Used in the Frontend

    "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-google-login": "^5.2.2",
    "react-icons": "^4.2.0",
    "react-rating-stars-component": "^2.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.0",
    "web-vitals": "^1.0.1"
    }


# Dependencies Used in the Backend

    "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "google-auth-library": "^7.1.2",
    "mongodb": "^3.6.9",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.7"
    }

# Screenshots

![image](https://user-images.githubusercontent.com/78935540/125161223-18393380-e14f-11eb-880b-6eecab11368b.png)

## Classes Page

![image](https://user-images.githubusercontent.com/78935540/125161435-63077b00-e150-11eb-92b5-16839e219d13.png)

## Class Page

![image](https://user-images.githubusercontent.com/78935540/125161410-3ce1db00-e150-11eb-9ee7-c66742f57aa9.png)


## Checkout Page

![image](https://user-images.githubusercontent.com/78935540/125161386-0906b580-e150-11eb-8d37-38bc3c60d94b.png)

## User Dashboard

![image](https://user-images.githubusercontent.com/78935540/125161611-4d468580-e151-11eb-8007-dee07b75773a.png)


## Teacher Dashboard

![image](https://user-images.githubusercontent.com/78935540/125161538-ea54ee80-e150-11eb-9aa0-5d06dbd472da.png)


## Admin Dashboard

![image](https://user-images.githubusercontent.com/78935540/125161560-022c7280-e151-11eb-93e8-d59384a60cf5.png)

![image](https://user-images.githubusercontent.com/78935540/125161584-21c39b00-e151-11eb-872c-8100d3285cad.png)










