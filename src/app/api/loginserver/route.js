import user from "@/models/sign";
import bcryptjs from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
       const data = await req.json()
        console.log(data.password);
       const checkuser = await user.findOne({email:data.email})
       if(checkuser){
        console.log(checkuser);
          const checkpassword = await bcryptjs.compare(data.password , checkuser.password )
          console.log(checkpassword);
          if(checkpassword){
            console.log(checkpassword);
            return NextResponse.json({message:'Profile Created' , email:data.email})
          }
          else{
            return NextResponse.json({message:'Invalid Credentials'})
          }
       }
       else{
         return NextResponse.json({message:'Invalid Credentials'})
       }
    } catch (error) {
        console.log(error);
    }
}