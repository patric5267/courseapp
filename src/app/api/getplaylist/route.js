import enroll from "@/models/enroll";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const data  = await req.json()
        const getplaylist = await enroll.find({email:data.email}).populate(courseid)
        if(getplaylist){
            return NextResponse.json(getplaylist)
        }
    } catch (error) {
        console.log(error);
    }
}