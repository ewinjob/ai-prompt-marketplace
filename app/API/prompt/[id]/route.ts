import { connectionDB } from "@/lib/db";
import Prompt from "@/models/prompt";

import { NextRequest,NextResponse } from "next/server";

 

// get a prompt
export async function GET(request:NextRequest,{params}:{params:Promise<{id:String}>}){
    try{
        await connectionDB()
        const {id} = await params;
        console.log(id);
        
        const onePrompt = await Prompt.findById(id)
        console.log(onePrompt);

        return NextResponse.json({
            message:"successfully fetched one prompt",onePrompt
        },{status:200})
        

    }catch(err){
        return NextResponse.json({
        message:"error while getting prompt",err
    },{status:500})
    }
}



// delete prompt
export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:String}>}){
    try{

        await connectionDB()
         const {id} = await params;
        console.log(id);

        const delPrompt = await Prompt.findByIdAndDelete(id)
        console.log(delPrompt);

        return NextResponse.json({
            message:"deleted success",delPrompt
        },{status:200})
        

    }catch(err){
         return NextResponse.json({
        message:"error while deleting"+err
    },{status:500})
    }
}