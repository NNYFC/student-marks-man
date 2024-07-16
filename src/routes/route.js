const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')
const { body } = require('express-validator');

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

router.get('/students',controller.getAllStudents);

router.get('/student/:name', (req, res)=>{
    let name = req.params.name;
    res.send(`Hello ${name}!`);
});
  
router.post('/student', controller.saveStudent);

router.put('/student', [body('name').isLength({min:3}),body('email').isLength({min:7})], controller.updateStudent);

router.delete('/student/:id', controller.deleteStudent);

module.exports = router; 