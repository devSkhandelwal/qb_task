const express = require("express");

const service = require("../service/render");
const dataController = require("../controllers/dataController");
const router = express.Router();

router.route("/").get(service.homeRoute);

router.route("/api/data").get(dataController.getData);

module.exports = router;
