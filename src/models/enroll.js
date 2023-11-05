import mongoose from "mongoose";

const enrollSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    cid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
})
mongoose.models = {}
const enroll = mongoose.model('enroll'  ,enrollSchema)
export default enroll