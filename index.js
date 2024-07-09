const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello world!');
});


// mount the router on the app
app.use('/router', router)

app.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}`);
});
