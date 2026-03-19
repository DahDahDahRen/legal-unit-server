const { createCustomError } = require("../utils/custom-error");
const asyncWrapper = require("../middleware/async");

// Routes
// GET:: All employees
const getAllEmployees = asyncWrapper(async (req, res, next) => {
  res.status(202).json({
    msg: "Success",
  });
});

module.exports = {
  getAllEmployees,
};
