var express = require('express');
var router = express.Router();
const controller=require('../controllers/index.controller')

/* GET home page. */
router.get('/QuesoArtesanal',controller.QuesoArtesanal);
router.post('/guardarResenaQuesoArtesanal', controller.guardarResenaArtesanal);

router.get('/QuesoOaxaca',controller.QuesoOaxaca);
router.post('/guardarResenaQuesoOaxaca', controller.guardarResenaOaxaca);

router.get('/QuesoOrion',controller.QuesoOrion);
router.post('/guardarResenaQuesoOrion', controller.guardarResenaOrion);

router.get('/QuesoPanela',controller.QuesoPanela);
router.post('/guardarResenaQuesoPanela', controller.guardarResenaPanela);

router.get('/QuesoRanchero',controller.QuesoRanchero);
router.post('/guardarResenaQuesoRanchero', controller.guardarResenaRanchero);

router.get('/QuesoRancheroOrion',controller.QuesoRancheroOrion);
router.post('/guardarResenaQuesoRancheroOrion', controller.guardarResenaRancheroOrion);

router.get('/QuesoPanelaVerde',controller.QuesoPanelaVerde);
router.post('/guardarResenaQuesoPanelaVerde', controller.guardarResenaPanelaVerde);

router.get('/QuesoOaxacaVerde',controller.QuesoOaxacaVerde);
router.post('/guardarResenaQuesoOaxacaVerde', controller.guardarResenaOaxacaVerde);

router.get('/QuesoOaxacaRallado',controller.QuesoOaxacaRallado);
router.post('/guardarResenaQuesoOaxacaRallado', controller.guardarResenaOaxacaRallado);

router.get('/QuesoOrionRallado',controller.QuesoOrionRallado);
router.post('/guardarResenaOrionRallado', controller.guardarResenaOrionRallado);

router.get('/',controller.index);
router.get('/Nosotros',controller.Nosotros);
router.post('/enviarmail',controller.enviarmail);
router.get('/Recetas',controller.Recetas);


router.get('/Receta1',controller.Receta1);
router.get('/Receta2',controller.Receta2);
router.get('/Receta3',controller.Receta3);
router.get('/Receta4',controller.Receta4);
router.get('/Receta5',controller.Receta5);
router.get('/Receta6',controller.Receta6);


module.exports = router;
