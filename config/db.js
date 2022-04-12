const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/tododb').then((con)=>{
            console.log(`DataBase Connected`);
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;