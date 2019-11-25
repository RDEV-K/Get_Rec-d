require('dotenv').config(); // this is important!
module.exports = {
"development": {
  "username": "root",
  "password": process.env.developmentPassword,
    "database": "recLTS_db",
    "host": "localHost",
    "dialect": "mysql",
    
},
"test": {
    "username": "root",
    "password": process.env.developmentPassword,
    "database": "database_test",
    "host": "localHost",
    "dialect": "mysql"
},
"production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
}
};