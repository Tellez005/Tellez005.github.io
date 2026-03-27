//Sirve para crear servidores web
import http from 'http';
//Sirve para traer el file system de Node 
import fs from 'fs';


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
      fs.readFile('Tarea4/bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Es un error del sistema
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Significa que no hay errores
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }



    function getMascotas(req, res) {
        //Esto representa un objeto JSON de una mascota
        //Agrega otra mascota
        const mascotas = [
            {
                "nombre": "Pikachu",
                "color": "Amarillo",
            },
            {
                "nombre": "Charizard", 
                "color": "Rojo"
            }
        ]  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //EConvertimos un valor o un objeto en cadena de texto, lo necesitamos por si en algun momento no mandamos un string.
      res.end(JSON.stringify(mascotas));
    }
    function mostrarMascotas(req,res){
        fs.readFile('Tarea4/mascotas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }); 

    }
     
      function mostrarAdoptantes(req, res) {
        //Construye una página básica adpotantes.html
        fs.readFile('Tarea4/adoptantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function getAdoptantes(req, res) {
        const adoptantes = [
            {
                "Nombre": "Jose",
                "localidad": "Centro",
            },
            {
                "Nombre": "Jaime", 
                "localidad": "Tepic"
            }
        ]  
        res.writeHead(200, { 'Content-Type': 'application/json' });      
        res.end(JSON.stringify(adoptantes));
    }
      function mostrarEquipo(req, res) {
        //Construye una página básica adpotantes.html
        fs.readFile('Tarea4/equipo.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function getEquipo(req, res) {
        const equipo = [
            {
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
            }
        ]  
        res.writeHead(200, { 'Content-Type': 'application/json' });      
        res.end(JSON.stringify(equipo));
    }

      function mostrarOpinion(req, res) {
        fs.readFile('Tarea4/opinion.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    function getOpinion(req, res) {
        const opinion = [
            {
                "Opinion": "Tiene parte de razon el texto, claramente hay poder en ellos al tenerlo, pero al igual siento yo que si no haras nada malo pues realmente no te van a espiar y menos a personas tan insignificantes para ellos",

            },
        ]  
        res.writeHead(200, { 'Content-Type': 'application/json' });      
        res.end(JSON.stringify(opinion));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('a');
    }

    //incluye el enlace a la documentación de createServer
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/mascotas') {
        getMascotas(req, res);
      } else if (url === '/api/adoptantes') {
        getAdoptantes(req, res);
      } 
      else if (url === '/mascotas') {
        mostrarMascotas(req, res);
      } 
      else if (url === '/adoptantes') {
        mostrarAdoptantes(req, res);
      }else if(url === '/api/equipo'){
        getEquipo(req,res); 
      }
      else if(url =='/equipo'){
        mostrarEquipo(req,res);
      }else if(url == '/opinion'){
        mostrarOpinion(req,res); 
      }
      else if(url == '/api/opinion'){
        getOpinion(req,res); 
      }


      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a equipo.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?
      //No lo intente pero creo que si no pasa es por que al mandarlo lo estamos convirtiendo en texto y pues la imagen no es un texto 

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html