const fs = require('fs');
const saludar = require('./saludos');

//Usar la función saludar
const mensaje = saludar("Coco");

//Crear un archivo
fs.writeFile('saludo.txt', mensaje, (err) => {
    if (err) throw err;
    console.log('Archivo saludo.txt creado con éxito');

    //Leer el archivo creado
    fs.readFile('saludo.txt', 'utf8', (err, data)=>{
        if (err) throw err;
        console.log('Contenido leído:', data);

        //Añadir más contenido
        fs.appendFile('saludo.txt', '\n¡Nos vemos pronto!', (err) =>{
            if (err) throw err;
            console.log('Contenido añadido con éxito.');
        });
    });
});