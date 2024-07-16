const db = require('../db_config');
const { validationResult } = require('express-validator');

// Getting list of students
exports.getAllStudents = async(req, res) =>{
    try{
        const result = await db.query('SELECT * FROM students');
        const users = result[0];
        
        res.status(200).send({success:true, count: users.length, data: users});
    }catch(err){
        res.status(500).send({success:false, message:"Error fetching users: "+err.stack});
    }
    
};

// adding a student
exports.saveStudent = async(req, res) =>{
    try{
        const errors = validationResult(req).errors;
        if(errors.length>0){
            res.status(400).send({success:false, data:[], message: errors[0].msg});
        }else{
            let { name,email } = req.body;
            const result = await db.query('INSERT INTO students(name,email) VALUES(?,?)', [name,email]);
            const users = result;
            
            res.status(201).send({success:true, data: users, message: "Successfully saved"});
        }
    }catch(err){
        res.status(500).send({success:false, data:[], message:"Error adding user: "+err.stack});
    }
    
};

// updating a student info
exports.updateStudent = async(req, res) =>{
    try{
        const errors = validationResult(req).errors;
        if(errors.length>0){
            res.status(400).send({success:false, data:[], message: errors[0].msg});
        }else{
            let { name,email } = req.body;
            let id = req.query.id;
            const result = await db.query('UPDATE students SET name = ?, email =? WHERE id = ?', [name,email,id]);
            const users = result;
            
            res.status(201).send({success:true, data: users, message: "updated successfully"});
        }
    }catch(err){
        res.status(500).send({success:false, data:[], message:"Error updating user: "+err.stack});
    }
    
};

// remove a student
exports.deleteStudent = async(req, res) =>{
    try{
        let id = req.params.id;
        const result = await db.query('DELETE students WHERE id = ? ', [id]);
        const users = result;
        
        res.status(201).send({success:true, message: "Student deleted successfully"});
    }catch(err){
        res.status(500).send({success:false, message:"Error fetching users: "+err.stack});
    }
    
};
