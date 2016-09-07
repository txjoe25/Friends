var express  = require( 'express' ),
    path     = require( 'path' ),
    body_parser = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
require("./server/config/mongoose.js");


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( body_parser.json());
var routes = require("./server/config/routes.js")(app);
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});