import { NextResponse } from "next/server";
import Course from "@/models/course";

export async function POST(req) {
    try {
        const data = await req.json()
        console.log(data);
        const getcourses = await Course.find({category:data.sub})
        if (getcourses) {
            return NextResponse.json(getcourses)
        }
    } catch (error) {
        console.log(error);
    }

}