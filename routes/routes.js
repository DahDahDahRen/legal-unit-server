const express = require("express");
const router = express.Router();
const { getAllEmployees } = require("../controller/controller");

// Get all employee
router.get("/", getAllEmployees);

module.exports = router;
