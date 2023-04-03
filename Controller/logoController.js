const Logo = require('../Model/Logo');

exports.createLogo = async (req, res) => {
  const { logoName, imageUrl } = req.body;
  const logo = new Logo({
    logoName,
    imageUrl,
  });
  try {
    const newLogo = await logo.save();
    res.status(201).json(newLogo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getAllLogos = async (req, res) => {
    try {
      const logos = await Logo.find();
      res.json(logos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  