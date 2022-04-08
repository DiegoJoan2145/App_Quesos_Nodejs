
var express = require('express');
//Requerimos el paquete
var nodemailer = require('nodemailer');
const productoSchema = require('../models/reseña');

var moment=require('moment');

var path = require('path');

const { randomNumber } = require('../helpers/libs');
const { Image } = require('../models');

const fs = require('fs-extra')





module.exports = {
QuesoArtesanal: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Artesanal'})
  console.log('id', producto);
  res.render('Productos/QuesoArtesanal', {producto});
},

guardarResenaArtesanal: async (req, res) => {
  //Obtener los datos de la img
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);

  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({

    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    //descripcion : req.body.descripcion,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoArtesanal');
  });
}
},



QuesoOaxaca: async (req, res)=> {
const producto = await productoSchema.find({nombreProducto : 'Queso Oaxaca'})
console.log('id', producto);
 res.render('Productos/QuesoOaxaca', {producto});
},

guardarResenaOaxaca: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);

  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoOaxaca');
  });
}
},



QuesoOrion: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Orion'})
  console.log('id', producto);
  res.render('Productos/QuesoOrion', {producto});
},

guardarResenaOrion: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoOrion');
  });
}
},




QuesoPanela: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Panela'})
  console.log('id', producto);
  res.render('Productos/QuesoPanela', {producto});
},

guardarResenaPanela: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
    
  console.log('nombre', productos);
  res.redirect('QuesoPanela');
  });
}
},



QuesoRanchero: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Ranchero'})
 
  console.log('id', producto);
  res.render('Productos/QuesoRanchero', {producto});
 },

 guardarResenaRanchero: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoRanchero');
  });
}
},



QuesoRancheroOrion: async (req, res)=> {
const producto = await productoSchema.find({nombreProducto : 'Queso Ranchero Orion'})
console.log('id', producto);
res.render('Productos/QuesoRancheroOrion', {producto});
},

guardarResenaRancheroOrion: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoRancheroOrion');
  });
}
},

QuesoPanelaVerde: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Panela Verde'})
  console.log('id', producto);
  res.render('Productos/QuesoPanelaVerde', {producto});
 },

 guardarResenaPanelaVerde: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD');
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoPanelaVerde');
  });
}
},


 QuesoOaxacaVerde: async (req, res)=> {
  const producto = await productoSchema.find({nombreProducto : 'Queso Oaxaca Verde'})
  console.log('id', producto);
  res.render('Productos/QuesoOaxacaVerde', {producto});
 },

 guardarResenaOaxacaVerde: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD'); 
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoOaxacaVerde');
  });
}
},



QuesoOaxacaRallado: async (req, res)=> { 
const producto = await productoSchema.find({nombreProducto : 'Queso Oaxaca Rallado'})
console.log('id', producto);
res.render('Productos/QuesoOaxacaRallado', {producto});
},

guardarResenaOaxacaRallado: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD'); 
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    
filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoOaxacaRallado');
  });
}
},


QuesoOrionRallado: async (req, res)=> {  
const producto = await productoSchema.find({nombreProducto : 'Queso Orion Rallado'})
console.log('id', producto);
res.render('Productos/QuesoOrionRallado', {producto});
},

guardarResenaOrionRallado: async (req, res) => {
  const imgUrl = randomNumber();
  const imageTempPath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase(); //.png
  const targetPath = path.resolve(`public/upload/${imgUrl}${ext}`)
  console.log(targetPath);

  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
    await fs.rename(imageTempPath, targetPath);
  var fechaactual = moment().format('YYYY-MM-DD'); 
  const producto = new productoSchema({
    nombreProducto : req.body.prodId,
    fechaReseña : fechaactual,
    calificacion : req.body.estrellas,
    filename: imgUrl + ext,
    nombreReseña: req.body.nombre, 
    descripcionReseña: req.body.descripcionReseña 
});
producto.save(function (err, productos) {
    if (err) {
        return res.status(500).json({
            message: 'Error al crear',
            error: err
        });
    }
  console.log('nombre', productos);
  res.redirect('QuesoOrionRallado');
  });
}
},


index: (req, res)=> {
  res.render('index');
 },
 Nosotros: (req, res)=> {
  res.render('Nosotros');
 },
 Recetas: (req, res)=> {
  res.render('Recetas');
 },
 Receta1: (req, res)=> {
  res.render('Recetas/Receta1');
 },
 Receta2: (req, res)=> {
  res.render('Recetas/Receta2');
 },
 Receta3: (req, res)=> {
  res.render('Recetas/Receta3');
 },
 Receta4: (req, res)=> {
  res.render('Recetas/Receta4');
 },
 Receta5: (req, res)=> {
  res.render('Recetas/Receta5');
 },
 Receta6: (req, res)=> {
  res.render('Recetas/Receta6');
 },


 
 enviarmail: (req, res) => {
  let subject = req.body.subject;
  let from = req.body.subject;
  let message = req.body.message;

  console.log("subject", subject);

 var transporter = nodemailer.createTransport({

   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
     user: 'LaQuinta32456786@gmail.com',
     pass: 'huahtfhwkiwbkrwm'
   }
 });

 var mensaje = "Hola desde nodejs...";

 var mailOptions = {
   from: from,
   to: 'LaQuinta32456786@gmail.com',
   subject: subject,
   text: message
 };

 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log('ubo un error', error);
   } else {
     console.log('Email enviado: ' + info.response);
   }
 });

 res.render("nosotros");

},



mostrarResena: async (req, res) => {
  const id = req.params.QuesoArtesanal;

 const producto = await productoSchema.find({nombreProducto})

  console.log('id', id);

  res.redirect('QuesoArtesanal');
}


};

