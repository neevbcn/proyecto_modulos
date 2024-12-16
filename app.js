const fs = require('fs');

//Crear un archivo
fs.writeFile('archivo.txt', 'Contenido inicial del arhivo.', (err) => {
    if (err) throw err;
    console.log('Archivo creado con éxito');

    //Leer el archivo creado
    fs.readFile('archivo.txt', 'utf8', (err, data)=>{
        if (err) throw err;
        console.log('Contenido leído:', data);

        //Añadir contenido extra
        fs.appendFile('archivo.txt', '\nContenido adicional.', (err) =>{
            if (err) throw err;
            console.log('Contenido añadido con éxito.');
        });
    });
});