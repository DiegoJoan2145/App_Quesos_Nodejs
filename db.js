const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://',{ 
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db=>console.log('Conectado a la base de datos'))
.catch(err=>console.log(err));