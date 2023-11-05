import enroll from "@/models/enroll";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const data= await req.json()
        const checkenroll = await enroll.findOne({$and:[{email:data.email} , {cid:data.id}]})
        if(checkenroll){
            console.log(checkenroll);
            return NextResponse.json({message:'Already added to Playlist'})
        }
        else{
            const newenroll = new enroll({email:data.email , cid:data.id , video:data.video , thumbnail:data.thumbnail , title:data.title})
            const saveenroll = await newenroll.save()
            if(saveenroll){
                return NextResponse.json({message:'Added to Playlist'})
            }
        }
    } catch (error) {
        console.log(error);
    }
}