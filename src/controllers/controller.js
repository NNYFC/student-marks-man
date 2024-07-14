const db = require('../db_config');

// Getting list of students
exports.getAllStudents = async(req, res) =>{
    try{
        const result = await db.query('SELECT * FROM students');
        const users = result[0];
        
        res.status(200).send({success:true, count: users.length, data: users});
    }catch(err){
        res.status(500).send("Error fetching users: "+err.stack);
    }
    
};

// adding a student
exports.saveStudent = async(req, res) =>{
    try{
        let { name,email } = req.body;
        const result = await db.query('INSERT INTO students(name,email) VALUES(?,?)', [name,email]);
        const users = result;
        
        res.status(201).send({success:true, data: users});
    }catch(err){
        res.status(500).send("Error adding user: "+err.stack);
    }
    
};

// updating a student info
exports.updateStudent = async(req, res) =>{
    try{
        let { name,email } = req.body;
        let id = req.query.id;
        const result = await db.query('UPDATE students SET name = ?, email =? WHERE id = ?', [name,email,id]);
        const users = result;
        
        res.status(201).send({success:true, data: users});
    }catch(err){
        res.status(500).send("Error updating user: "+err.stack);
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
        res.status(500).send("Error fetching users: "+err.stack);
    }
    
};
