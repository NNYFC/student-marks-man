const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

router.get('/',(req, res)=>{
    res.status(401).send("Routing test");
});

router.get('/student/:name', (req, res)=>{
    let name = req.params.name;
    res.send(`Hello ${name}!`);
});
  
router.post('/student', (req, res)=>{
    let {name, email} = req.body
    res.send({ 'name': name, 'email': email });
});

module.exports = router; 