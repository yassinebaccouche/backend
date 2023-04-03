import mongoose from"mongoose" ;
import bodyparser from"body-parser" ;
import express from"express";


const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const { Schema , model} = mongoose;
const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


export default model('Message', messageSchema);