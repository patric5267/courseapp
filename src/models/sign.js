import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileimg:{
        type:String,
        required:true
    }
})

mongoose.models = {}
const user = mongoose.model('user' , userSchema)
export default user