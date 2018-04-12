const express  = require('express') 
const bodyParser = require('body-parser') 
const massive  = require('massive') 
const ctrl = require('./products_controller')

let app = express();

app.use(bodyParser.json());

const connectionString = 'postgres://khqgmebzfsmfqt:f283f804a31f7789e86c54da5fa20048d276eefb0a70dda07547f59104162666@ec2-54-204-21-226.compute-1.amazonaws.com:5432/dbcliuko1mdqn1?ssl=true';

app.get('/api/products', ctrl.getAll)
app.get('/api/product/:id', ctrl.getOne)
app.post('/api/product', ctrl.create)
app.put('/api/product/:id', ctrl.update)
app.delete('/api/product/:id', ctrl.delete)

massive(connectionString).then(connection => {
 app.set('db', connection); //hold onto this thought // no correlation between this and the db folder // 
 let port = 3005;
 app.listen(port, () => {
   console.log('The Daelaam wait, on',port + '.');
 });
});


