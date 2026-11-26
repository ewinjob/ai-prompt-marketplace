import { Schema,models,model } from "mongoose"


export interface IPrompt{
    title:String,
    description:String,
    promptText:String,
    category:String,
    tags:[],
    author:String,
    favorite:String,
    createdAt:Date
}

const promptSchema = new Schema<IPrompt>(
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            promptText:{
                type:String,
                required:true,
            },
            category:{
                type:String,
                required:true,
            },
            tags:{
                type:[],
                default:[],
            },
            author:{
                type:String,
                required:true,
            },
            favorite:{
                type:Boolean,
                default:false,
            },
            createdAt:{
                type:Date,
                default:Date.now()
            }
        }
)


const Prompt = models.Prompt || model<IPrompt>('Prompt',promptSchema)

export default Prompt;