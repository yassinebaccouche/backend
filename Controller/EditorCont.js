import Editor from '../Model/Editor.js';
export const createEditor = async (req, res) => {
  try {
    const { editor } = req.body;

    const post = new Editor({ editor });

    const savedEditor = await post.save();

    return res.status(201).json({ message: 'Editor created successfully', post: savedEditor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
export const updateEditor = async (req, res) => {
  try {
    const { editor } = req.body;
    const { id } = req.params;

    const post = await Editor.findByIdAndUpdate(
      id,
      { editor },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Editor not found' });
    }

    return res.status(200).json({ message: 'Editor updated successfully', post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
export const getEditor = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Editor.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Editor not found' });
    }

    return res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

