import user from "@/models/sign";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const data = await req.json()
        const getuser = await user.findOne({email:data.email}).select('-password')
        if(getuser){
            return NextResponse.json(getuser)
        }
    } catch (error) {
        console.log(error);
    }
}