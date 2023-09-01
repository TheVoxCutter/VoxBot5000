export default (req, res) => {
  res.status(200).json({ message: "Twitter callback route active!" });
};
