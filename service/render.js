const axios = require("axios");

exports.homeRoute = async (req, res) => {
  const { data } = await axios.get("http://localhost:5000/api/data");
  res.render("index", {data:data});
};
