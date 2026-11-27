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
        message:"error while getting prompt"+err
    },{status:500})
    }
}


// edit 
export async function PUT(request:NextRequest,{params}:{params:Promise<{id:String}>}){
    try{

        await connectionDB()
        const reqBody = await request.json()
        const {id}=await params;
        console.log(id);
        
        const updatePrompt = await Prompt.findByIdAndUpdate(id,reqBody,{new:true});
        console.log(updatePrompt);

        return NextResponse.json({
            message:"successfully updated",updatePrompt
        },{status:200})
        

    }catch(err){
                 return NextResponse.json({
        message:"error while updating"+err
    },{status:500})
    }
}


// favorite
export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:String}>}){
    try{

        await connectionDB()
        const {id}=await params;
        console.log(id);
        const reqBody=await request.json()

        const favoritePrompt = await Prompt.findByIdAndUpdate(id,{favorite:reqBody.favorite},{new:true})
        return NextResponse.json({
            message:"favorite added true",favoritePrompt
        })
        

    }catch(err){
        return NextResponse.json({
        message:"error while favouring"+err
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