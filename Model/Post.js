import mongoose from"mongoose" ;
import bodyparser from"body-parser" ;
import express from"express";



const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const { Schema , model} = mongoose;


const postSchema = mongoose.Schema({
 
      Title: {
        type: String,
        require: true,
      },
      idUser: {
        type: String,
        require: true,
      },
      date: {
        type: Date,
    
      },
      description:{
        type: String,
      },
      image:{
        type:String,
      },
      url:{
        type:String,
      }

     
   

      
     
    },
   
    {
      timestamps: true,
    }
  );




export default model("post" ,  postSchema  )