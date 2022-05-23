const {response,request} = require("express");
const cors = require('cors');
const express = require("express"); //requerimos el modulo de express
const mongo = require("mongodb").MongoClient;
let ObjectId = require('mongodb').ObjectId;

//npm init // crea proyecto node js
//npm install express
//npm instal mongodb
//npm i cors
//npm i  xhrs

const app = express();//definimos una app de express
app.use(express.json());//Middleware

app.use(cors({
    origin: "*",
    // origin: 'http://127.0.0.1:5500',
    // origin:  'http://localhost:4200',
    methods: "GET,PUT,POST,DELETE"
}));


const url = "mongodb://localhost:27017";

let db
mongo.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
(err, client)=>{
    if(err){
        console.log(err);
        return;
    }
    db = client.db("adminPro");
    console.log("conectado a adminProAPIDB");
    users = db.collection("Users");
})

// app.get("/demo",(req,res)=>{
//     console.log("Escuchando en el puerto 3005...");
//     res.status(200).json({ok:true});
// });

//USERS
app.get("/users",(request,response)=>{
    users.find().toArray((err,items)=>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json(items);
    });
});

// app.get("/users/:id",(request,response)=>{
//     let alumnoId = request.params.id;
//     console.log(alumnoId);
//     alumnos.findOne({_id:ObjectId(alumnoId)},function(err,alumno){
//         if(err){
//             console.log(err);
//             response.status(500).json({err:err});
//             return;
//         }
//         response.status(200).json({alumno:alumno});
//     });
// });

app.post("/users",(request,response)=>{
    console.log(request);
    users.insertOne(
        {   
            Name : request.body.Name,
            Email: request.body.Email,
            Password: request.body.Password
        },
        (err,items)=>{
        if(err){
            console.log(err);
            response.sendStatus(500);
            return;
        }
        return response.status(200).json(request.body);
    })
});

app.listen(3005, ()=>{
    console.log("Escuchando en el puerto 3005...");
})
