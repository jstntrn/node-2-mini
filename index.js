const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    // dbInstance.new_planes()
    // .then((planes) => {console.log(planes)})
    // .catch((err) => {console.log(err)})
    
    // dbInstance.get_planes()
    // .then((planes) => {console.log(planes)})
    // .catch((err) => console.log(err))
});

app.get(`/api/planes`, ctrl.getPlanes)


const PORT = process.env.PORT || 3000
app.listen( PORT , () => { console.log(`Server listening on port ${PORT}`); } );

