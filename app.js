const express = require('express');
var hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Daniel García',
    titulo: 'Curso de node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Daniel García',
    titulo: 'Curso de node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Daniel García',
    titulo: 'Curso de node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
