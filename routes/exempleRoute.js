const express = require('express');
const router = express.Router();

//Importation des controllers
Ctrl = require('../controllers/exempleCtrl')
//END Importation des controllers

//Logique de route
router.get('/exemple',Ctrl.exemple);
//END Logique de route


module.exports = router;