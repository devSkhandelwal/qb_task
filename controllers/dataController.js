const DataModel = require("../models/dataModel");

exports.getData = async (req, res, next) => {
  try {
    const data = await DataModel.find();
    if (!data) {
      res.json({
        message: "no data exists",
      });
    }
    res.json(data);
  } catch (error) {
    return next("something went wrong");
  }
};
