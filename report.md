# Advance Database Systems COM519
## Project Github link
The project of this module is hosted in https://github.com/JonathanOrtz/Advance-Database-Systems-COM519.git
This project contain a ReadME file of how to run the project and the project version controlled.


## Project Production deployed:
The project is hosted in Heroku and the link to access to it is https://agenda-app-com519.herokuapp.com/

## Introduction
This project is based in the manage of a database in a fullstack web application. The project required create from scrach or using a dataset of Kaggle.com to create the project. The option chosen in this project was the creation of a Agenda or also know as a diary, where it can be write some task/duties that maybe is required to do later or just remember some things. This project required at least the used of CRUD of a database and the creation of an online agenda was a good idea due to this days everything it is online.
## System Overview
### - Database
This project is built under Mongodb, a noSQL database which is based in key: values. It is like a JSON file format of data where each data is a document inside of a collection which is inside of a database.
This system is composed by one database called list database. Inside of it contains one collection called duties. The duties is formed by documenst that in our project is called taks or duty. Each duty is introduced by the user thanks to the model schema given by the node package moongose.

In this case the Duty.js is in charge of create the Schema with Moongose 

## Key Design Decisions

### Database design 
#### List database
The database of this project is only one database no SQL Moonose and one collection inside of it.
The documents are componed by an id, name, detailing, boolean done, and timestaps of when they were created and updated.
In our database the id is fundamental for the CRUD operations.
![image](https://user-images.githubusercontent.com/72144755/150556920-adeca5a8-15d2-4308-8f44-0ce8182ec2d5.png)
![image](https://user-images.githubusercontent.com/72144755/150557069-62b18bad-882e-4653-9060-5441312acc08.png)
Schema used to modeling our data, also we put there validation to keep the security and consistency of our database. 

### Security and Scalability
#### - Software Desing
This project used the MVC desing patter to be developed, it is was chosen because it is one of the most or the most desing pattern used to develop this projects. The MVC pattern divided the logic and the visualisation in two. The Model(Duty.js) of the MVC manage the data from the database, Mongodb in this project, the Views layer manage the design and presentation and the Controllers(duty.js) manage the commands of the models and views.
![image](https://user-images.githubusercontent.com/72144755/150556870-beb03b41-8f1d-4baf-a7af-20dab93c95ae.png)
![image](https://user-images.githubusercontent.com/72144755/150557498-4775886a-9c7b-4aff-b47f-532e63753c54.png)
controllers manage the responses of user interaction.

## Conclusion and Reflection
In conclusion this project was something that challenge me, due to the idea of a learn a new type of database. They new hability to know hwo to design and hwo the data is relatd with each other. The use of libraries like express or mongoose provied also a new point of view of how webapp works.
