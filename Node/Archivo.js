import url from 'url'; 

let p=new Promise(function(resuelto, rechazo){
    let test=100;
    if(test==10){
        resuelto("Freedom is a constant struggle.");
    } else {
        rechazo("Being oppressed means the absence of choices");
    }

});

console.log(p);
//console.log(req);
const urlProcesada = url.parse(req.url, true);

const queryParams = urlProcesada.query; 