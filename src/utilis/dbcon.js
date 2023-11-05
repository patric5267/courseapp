import mongoose  from "mongoose";
// track the connection
import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})
const connecttodatbase = async()=>{
  try {
    const connect = await mongoose.connect(process.env.DATABASE)
    if(connect){
      console.log('Databse Connected');
    }
  } catch (error) {
      console.log(error);
  }
}


export default connecttodatbase