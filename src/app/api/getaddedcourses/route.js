import enroll from "@/models/enroll";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const data= await req.json()
        console.log(data.email);
        const getenrollcourses = await enroll.find({email:data.email})
        if(getenrollcourses){
            return NextResponse.json(getenrollcourses)
        }
    } catch (error) {
        console.log(error);
    }
}