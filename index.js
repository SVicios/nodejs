const express = require('express');
const app = express();
const path = require('path') // modulo por defecto

// configuracion de la aplicacion
// establecer el puerto
app.set('port', 3000);

// middelwares
//para usar las rutas estaticas
//dirname contiene la ruta completa de los archivos o servidor
app.use(express.static(path.join(__dirname, 'public')))

// rutas
app.get('/', (req, res)=>{
    res.send("bienvenidos");
})

app.listen(app.get('port'), ()=>{
    console.log(`aplicaion corriendo en el puerto ${app.get('port')} `);
})
