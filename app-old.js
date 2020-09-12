

const http = require('http');

http.createServer( ( req , res ) => {

    res.writeHead( 200, { 'content-type': 'application/json' } );

    let contenido = {
        nombre : 'Gerardo',
        edad: 24,
        url : req.url
    }
    res.write( JSON.stringify( contenido ));
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto 8080');