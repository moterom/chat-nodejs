const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/message', (req, res) => {
    res.send('Lista de mensaje');
});

router.post('/message', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('Mensaje '+ req.body.text +' añadido');
});



app.listen(3000);
console.log('La aplicacion esta en el puerto http://localhost:3000');