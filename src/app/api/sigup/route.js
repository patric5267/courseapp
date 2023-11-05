import user from "@/models/sign";
import bcryptjs from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
       const data = await req.json()
    
       const checkuser = await user.findOne({email:data.email})
       if(checkuser){
        return NextResponse.json({message:'User Already Exists'})
       }
       else{
        const hashpassword = await bcryptjs.hash(data.password , 10)
        const newuser = new user({name:data.name, email:data.email , password:hashpassword ,profileimg:data.profilepic})
        const saveuser = await newuser.save()
        if(saveuser){
            return NextResponse.json({message:'Profile Created' , email:data.email})
        }
       }
    } catch (error) {
        console.log(error);
    }
}