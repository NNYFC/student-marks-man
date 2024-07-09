const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

router.get('/students',controller.getAllStudents);

router.get('/student/:name', (req, res)=>{
    let name = req.params.name;
    res.send(`Hello ${name}!`);
});
  
router.post('/student', (req, res)=>{
    let {name, email} = req.body
    res.status(201).send({ 'name': name, 'email': email });
});

module.exports = router; 