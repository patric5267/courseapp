import { NextResponse } from "next/server";
import enroll from "@/models/enroll";

export async function POST(req){
    try {
        const data = await req.json()
        const deletecourse = await enroll.deleteOne({cid:data.overid})
        if(deletecourse){
            return NextResponse.json({message:'d'})
        }
    } catch (error) {
        console.log(error);
    }
}