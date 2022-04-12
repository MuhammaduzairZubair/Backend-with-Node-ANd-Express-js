const Todo = require('../models/todosSchema')


const users = [
    {
        "id":12,
        "name":"Uzair",
        "age":43
    },
    {
        "id":123,
        "name":"Uzair Zubair",
        "age":56
    }
]

exports.createNewTodo = async (req, res)=>{
    const body = req.body;

    try {
        await Todo.create(body)
    } catch (error) {
        console.log(error)
    }


    // console.log(body)
    res.json({
        "message":"Record has been saved"
    })
}

exports.getAllTodos = async (req, res)=>{
        try {
            const todos= await Todo.find({})
            res.json({
                "data":todos
            })
        } catch (error) {
            console.log(error)
        }
    }


    exports.getTodoById = async (req, res)=>{
        try {
            const todo = await Todo.findById(req.params.id)
            res.json({
                "data":todo
            })
        } catch (error) {
            console.log(error)
        }
    
        const user = users.find(user=>user.id===Number(req.params.id))
        res.json(user)
    }

 
    exports.updateTodo = async (req, res)=>{
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
            res.json({
                "Message":"record updated"
            })
        } catch (error) {
            console.log(error)
        }
    }



    exports.deleteTodo = async (req, res)=>{
        try {
            const todo = await Todo.findById(req.params.id);
            Todo.remove();
            res.json({
                "Message":"record deleted"
            })
        } catch (error) {
            console.log(error)
        }
    }
