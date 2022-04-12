
const users = [
    {
        "id":1,
        "username":"Uzair",
        "password":"abc"
    },
    {
        "id":2,
        "username":"Uzair Zubair",
        "password":"abc12"
    },
    {
        "id":3,
        "username":"Muhammad Uzair Zubair",
        "password":"abc1234"
    }
]

exports.createNewUser = (req, res)=>{
    
}

exports.getAllUsers = (req, res)=>{
        res.send(users)
    }


    exports.getUserById = (req, res)=>{
    
        const user = users.find(user=>user.id===Number(req.params.id))
        res.json(user)
    }

    exports.updateUser = (req, res) => {
        
    }


    exports.deleteTodo = (req, res) => {
        
    }
    
      // module.exports = {
    //     deleteTodo,
    //     updateUser
    // }