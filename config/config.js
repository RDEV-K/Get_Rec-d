require('dotenv').config(); // this is important!
module.exports = {
"development": {
  "username": "root",
  "password": process.env.developmentPassword,
    "database": "recLTS_db",
    "host": "localHost",
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "localHost",
    "dialect": "mysql"
},
"production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "localHost",
    "dialect": "mysql"
}
};