const mongoose = require('mongoose');
const Schema =mongoose.Schema;
var path = require('path');

const Producto = new  Schema({
    
        'nombreProducto':{type:String},
        'descripcion':{type:String},
        'nombreReseña':{type:String},
        'filename' : {type:String},
        'calificacion' : {type:Number},
        'fechaReseña':{type:String,required:true,default:Date.now},
        'descripcionReseña':{type:String},

});

Producto.virtual('uniqueId')
.get(function (){
        return this.filename.replace(path.extname(this.filename), '')
});

module.exports=mongoose.model('producto', Producto);