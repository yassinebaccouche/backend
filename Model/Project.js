import mongoose from 'mongoose';

const { Schema , model} = mongoose;

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: false,
  },
  domainDetails: {
    type: String,
    required: false,
  },
  projectLogo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Logo',
    required: false,
  },
  projectColor: {
    type: String,
    required: false,
  },
  slogan: {
    type: String,
    required: false,
  },
  moreDescription: {
    type: String,
    required: false,
  },
  userName: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  }
});

export default model("Project" ,  projectSchema  );
