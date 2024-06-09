import {Schema,model} from 'mongoose' 

const subscribeSchema = new Schema({
    email:{
        type:String,
        required:true
    }
},{timestamps:true});


export const Subscribe = model("Subscribe",subscribeSchema)