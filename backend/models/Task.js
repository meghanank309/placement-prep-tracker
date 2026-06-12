const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    category:{
        type:String,
        enum:["Coding","Aptitude","HR","Resume","Project"]
    },

    priority:{
        type:String,
        enum:["Low","Medium","High"]
    },

    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Task",taskSchema);