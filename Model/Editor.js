
import mongoose from 'mongoose';

const EditorSchema = mongoose.Schema(
  {
    editor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Editor = mongoose.model('Editor', EditorSchema);

export default Editor;