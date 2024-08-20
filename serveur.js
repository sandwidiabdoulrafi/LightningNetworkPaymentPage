const express = require('express');
const { get } = require('http');
const app = express();
const path = require('path');


app.use(express.json());
app.use(express.static('public'));

app.post('/submit',(req, res) =>{
    const getData = req.body;
    res.send('donnée recu');
});

app.listen(8808, ()=>{
    console.log('le serveur fonctionne avec le port 8808');
})