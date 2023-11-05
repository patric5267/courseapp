import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    title:{
        type:String
    },
    video:{
        type:String
    },
    category:{
        type:String
    },
    thumbnail:{
        type:String
    }
})
mongoose.models = {}
const Course = mongoose.model('Course' , courseSchema)
export default Course