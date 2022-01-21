# Advance-Database-Systems-COM519
Project webapp AGENDA online for COM519
## Deployment of AGENDA Advance-Database-Systems-COM519 in deveploment
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
PORT=302<br>
MONGODB_URI=mongodb+srv://admin123:solent123@cluster0.lrtog.mongodb.net/list?retryWrites=true&w=majority<br>
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
