const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const puerto = 1984;


function darBienvenida(req, res){
    fs.readFile('Tarea4/bienvenida.html', 'utf-8',(error,data) => {
        if(error){
            res.status(500).send('Se trono')
            return
        }
        res.send(data);
    })
    
}

function getMascotas(req,res){
    res.json([            {
                "nombre": "Pikachu",
                "color": "Amarillo",
            },
            {
                "nombre": "Charizard", 
                "color": "Rojo"
            }])
}
function mostrarMascotas(req, res){
    res.sendFile(path.join(__dirname,'mascotas.html'))
}

function getAdoptantes(res,req){
    res.json([            {
                "Nombre": "Jose",
                "localidad": "Centro",
            },
            {
                "Nombre": "Jaime", 
                "localidad": "Tepic"
            }])
}

function mostrarAdoptantes(req, res){
    res.sendFile(path.join(__dirname,'adoptantes.html'))
}
function getEquipo(req, res){
    res.json([            {
                "Nombre": "Jose Ramon",
                "localidad": "Centro",
                "cualidad": "Su cualidad en ver tiktoks"

            },
            {
                "Nombre": "Berny", 
                "localidad": "Su casa",
                "cualidad": "El mas responsable del equipo"
            },
            {
                "Nombre": "Ceasar", 
                "localidad": "Atotonilco el alto", 
                "cualidad": "Es responsable"
            }])
}

function mostrarEquipo(req, res){
    res.sendFile(path.join(__dirname,'equipo.html'))
}

function getOpinion(req, res){
    res.json([{
                "Opinion": "Tiene parte de razon el texto, claramente hay poder en ellos al tenerlo, pero al igual siento yo que si no haras nada malo pues realmente no te van a espiar y menos a personas tan insignificantes para ellos",

            }])
}

function mostrarOpinion(req, res){
    res.sendFile(path.join(__dirname,'opinion.html'))
}

app.get('/', darBienvenida);
app.get('/api/mascotas', getMascotas);
app.get('/mascotas', mostrarMascotas);
app.get('/adoptantes', mostrarAdoptantes);
app.get('/api/adoptantes', getAdoptantes);
app.get('/equipo', mostrarEquipo);
app.get('/api/equipo', getEquipo);
app.get('/opinion', mostrarOpinion);
app.get('/api/opinion', getOpinion);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});