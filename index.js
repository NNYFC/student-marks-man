const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello world!');
});

app.get('/student/:name', (req, res)=>{
  let name = req.params.name;
  res.send(`Hello ${name}!`);
});

app.post('/student', (req, res)=>{
  let {name, email} = req.body
  res.send({ 'name': name, 'email': email });
});

app.listen(port, ()=>{
    console.log(`Server listening on port http://localhost:${port}`);
});
