import Message from '../Model/Message.js';
import User from '../Model/User.js';

// Envoi d'un message
const sendMessage = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.sender });
    if (!user) throw new Error('User not found');

    const message = new Message({
      sender: req.body.sender,
      recipient: req.body.recipient,
      message: req.body.message,
      user: user._id
    });

    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Lister les messages reçus
const listMessages = async (req, res) => {
  try {
    const messages = await Message.find({ recipient: req.params.recipient }).populate('user', 'username');
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lire un message
const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id).populate('user', 'username');
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { sendMessage, listMessages, getMessage };
