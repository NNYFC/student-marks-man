const db = require('../db_config');

// Getting list of users
exports.getAllStudents = async(req, res) =>{
    try{
        const result = await db.query('SELECT * FROM students');
        const users = result[0];
        
        res.status(200).send({success:true, count: users.length, data: users});
    }catch(err){
        res.status(500).send("Error fetching users: "+err.stack);
    }
    
};
