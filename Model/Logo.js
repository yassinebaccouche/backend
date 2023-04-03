import mongoose from 'mongoose';

const { Schema , model} = mongoose;

const logoSchema = new mongoose.Schema({
  logoName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

export default model("logo" ,  logoSchema  )
