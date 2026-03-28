const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MySQL connection
const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"Van!12345",
database:"smart_city"
})

db.connect((err)=>{
if(err){
console.log(err)
}else{
console.log("MySQL Connected")
}
})
app.post("/complaint",(req,res)=>{

const {description,location} = req.body

const sql = "INSERT INTO complaints(description,location,status) VALUES(?,?,?)"

db.query(sql,[description,location,"pending"],(err,result)=>{
if(err){
console.log(err)
res.send("Error inserting complaint")
}else{
res.send("Complaint submitted successfully")
}
})

})
app.get("/complaints",(req,res)=>{

const sql = "SELECT * FROM complaints"

db.query(sql,(err,result)=>{
if(err){
console.log(err)
res.send("Error fetching complaints")
}else{
res.json(result)
}
})

})

app.put("/complaint/:id",(req,res)=>{

const id = req.params.id

const sql = "UPDATE complaints SET status='resolved' WHERE id=?"

db.query(sql,[id],(err,result)=>{
if(err){
console.log(err)
res.send("Error updating status")
}else{
res.send("Complaint resolved")
}
})

})

// test route
app.get("/",(req,res)=>{
res.send("Server running")
})

app.listen(5000,()=>{
console.log("Server running on port 5000")
})