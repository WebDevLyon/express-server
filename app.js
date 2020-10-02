const express = require('express')
//Importation des routes
const routeExemple = require('./routes/exempleRoute')
//END importation des routes

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Resolution probleme de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Logique de l'application
app.use('/',routeExemple)


//END Logique de l'application

module.exports = app