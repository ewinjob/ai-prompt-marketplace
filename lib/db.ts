import mongoose from "mongoose";

export async function connectionDB() {
    try{

        await mongoose.connect(process.env.connectionString!)
        console.log("mongoDB connection establish");
        
    }catch(err){
        console.log("mongoDB connection error",err);
    }
}