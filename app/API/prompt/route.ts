
import { connectionDB } from "@/lib/db";
import Prompt from "@/models/prompt";

import { NextRequest,NextResponse } from "next/server";


// get all prompts
export async function GET(request:NextRequest){
   try{
    await connectionDB()
   const allPrompts = await Prompt.find() 
   console.log(allPrompts);
   return NextResponse.json({
    message:"All prompts fetched success",allPrompts
   },{status:200})
   }catch(err){
    return NextResponse.json({
        message:"error while getting prompt",err
    },{status:500})
   }
}


// add prompt
export async function POST(request:NextRequest){
    try{

        await connectionDB()
        const reqBody = await request.json()
        const addPrompt = await Prompt.create(reqBody)
        console.log(addPrompt);

        return NextResponse.json({
            message:"Added success",addPrompt
        },{status:200})
        
    }catch(err){
        return NextResponse.json({
                message:"server showing Error"+err

        },{status:500})
    }
}

