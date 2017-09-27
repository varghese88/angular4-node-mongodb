const express   = require("express");
const router    = express.Router();
const jwt       = require('jsonwebtoken'); // used to create, sign, and verify tokens
const ObjectID  = require('mongodb').ObjectID;
const mongo     = require("./db");
// initialize data base
mongo.init((err)=>{
    if(err) throw err;
    console.log('-------------Data base connected successfully.--------------');
});

router.use((req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.APP_SECRET, function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
});

// retreive single data
router.get('/users',(req,res,next)=>{
    mongo.users.find({}).toArray((err, result) => {
        if(err) {
            return res.send(err);
        }
        return res.json(result);
    })
});
// retreive single data
router.get('/user/:id',(req,res,next)=>{
    mongo.users.findOne({_id:new ObjectID(req.params.id)},(err,doc)=>{
        if(err){
            return res.send(err);
        }
        return res.json(doc);
    })
});
//save data
router.post('/user',(req,res,next)=>{
    const data = req.body;
    if(!data){
        res.status(400);
        res.send({"error":"Bad Request"});
    } else {
        mongo.users.insert(data,(err,doc)=>{
            if(err){
                return res.send(err);
            }
            return res.json(doc);
        })
    }
});
// delete record
router.delete('/user/:id',(req,res,next)=>{
    mongo.users.remove({_id:new ObjectID(req.params.id)},(err,doc)=>{
        if(err){
            return res.send(err);
        }
        return res.json(doc);
    })
});
// update record
router.put('/user/:id',(req,res,next)=>{
    const data = req.body;

    if(!data){
        res.status(400);
        res.send({"error":"Bad Request"});
    } else {
        mongo.users.update({_id:new ObjectID(req.params.id)},data,(err,doc)=>{
            if(err){
                return res.send(err);
            }
            return res.json(doc);
        })
    }
});

router.post('/authenticate', function(req, res) {
    mongo.users.findOne({name:req.body.name},(err, user)=>{
        if (err) throw err;
        
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                const token = jwt.sign(user,process.env.APP_SECRET,{
                    expiresInMinutes:1440 // expire in 24 hour
                })
                res.json({
                    success: true,
                    message: 'Authentication successfully',
                    token: token
                });
            }
        }
    });
});

module.exports = router;