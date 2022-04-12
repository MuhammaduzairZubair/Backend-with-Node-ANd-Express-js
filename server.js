const express = require('express');
// const res = require('express/lib/response');
const app = express();
const PORT =8000;
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const todoRoutes = require('./routes/todoRoutes');
const usersRoutes = require('./routes/usersRoutes');
const connectDB = require('./config/db');

connectDB();

app.use(bodyParser.json())


//Mounting
app.use('api/v1', todoRoutes)



// app.get('/user', (req, res)=>{
//     res.send('Hello From the Server')
// })

// app.get('/todos',)

// app.post('/todo/new', (req, res)=>{
//     console.log(req.query);

//     res.send('Single Todo')
// })



app.listen(PORT, ()=>console.log(`Server Running on Port ${PORT}`))