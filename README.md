# Advance-Database-Systems-COM519
Project webapp AGENDA online for COM519
## Running of AGENDA Advance-Database-Systems-COM519 in deveploment
### Requirements:
* node js 
* mongo db
* ide 
* browser

A little intro about the installation. 
```bash
$ git clone https://github.com/JonathanOrtz/Advance-Database-Systems-COM519.git
```
in a directory
```bash
$ npm install
```
install the dependencies

create a .env file with the followin information inside:<br>
BASE_URI=http://localhost<br>
DATABASE: list<br>
PORT=3020<br>
MONGODB_URI=mongodb+srv://admin123:solent123@cluster0.lrtog.mongodb.net/list?retryWrites=true&w=majority <br>
<br>
Here it is set up the enviorement.
alternative you can use:<br>
MONGODB_URI=mongodb://localhost:27017/list<br>
instead of use the atlas mongo database you use your own local mongo database

after your configuration you can use:
```
npm run dev
```
this will start the project

## Running of AGENDA Advance-Database-Systems-COM519 in production
### Requirements:
* Node js
* Mongo db, Mongo atlas account
* heroku account
* ide
* browser

In production you shoulf use COM519 database, this server is hosted in MONGO ATLAS
You will need use ```mongodb+srv://admin1:<password>@cluster0.yfnog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority```
to run in production.
Also it will vital create branch or new repository with the code given.

### Steps:
* create a repository or create a branch of it
* Go to Mongodb.com/atlas and log in.
* Go to Heroku.com and log in or create an account
* In the setting sections of heroku click on Config vars
* in the key put MONGODB_URI and value mongodb+srv://admin1:solent123@cluster0.yfnog.mongodb.net/list?retryWrites=true&w=majority
* save it
* go to deploy
* link with github account where you project is
* down and click on enable automatic deploys
* and chose the project and deply brach(main)

### images of the process:
![image](https://user-images.githubusercontent.com/72144755/150544272-e322f2f2-1629-4518-a04a-0ff4dd0d75a0.png)
![image](https://user-images.githubusercontent.com/72144755/150544480-19ec9ae4-fd8a-4553-bcb1-b30be326bce6.png)
![image](https://user-images.githubusercontent.com/72144755/150544568-2505c2ef-68e1-4dcf-8550-f1c3e36a9500.png)
![image](https://user-images.githubusercontent.com/72144755/150544635-b3b08ca8-c4ad-4288-8170-ce4b0032fd33.png)





