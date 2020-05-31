//importar paquetes
const express = require('express');
const hbs = require('hbs');

//crear la app
const app = express();

//definir motor de plantillas para la vista usaremos hbs
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

//partials
hbs.registerPartials(__dirname + '/views/partials/');

//configurar rutas
app.get('/', (req, res)=>{
     res.render('index');
});

app.get('/vangogh', (req, res)=>{
    res.render('vangogh');
});

app.get('/davinci', (req, res)=>{
    res.render('davinci');
});

app.get('/elisabeth', (req, res)=>{
    res.render('elisabeth');
});

app.get('/fridakahlo', (req, res)=>{
    res.render('fridakahlo');
});

app.get('/picasso', (req, res)=>{
    res.render('picasso');
});



//arrancar el servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});