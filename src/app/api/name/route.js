import { NextResponse } from "next/server";
import course from "@/models/course";

export async function POST(req,res){
    try {
        const data = await req.json();
        const newcourse = new course({title:data.title , video:data.video , category:data.category , thumbnail:data.thumbnail })
        const savecourse = await newcourse.save()
        if(savecourse){
            return NextResponse.json({message:'course saved'})
        }
    } catch (error) {
         return NextResponse.json({error:error})
    }
} 