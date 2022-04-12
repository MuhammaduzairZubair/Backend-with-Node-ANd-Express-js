const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:6,
        maxlength:20
    },
    description:String,
    status:Boolean
})


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;