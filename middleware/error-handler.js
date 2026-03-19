const { CustomAPIError } = require("../utils/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  // Check if error object is instance of CustomError
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }

  // Default response
  return res.status(500).json({
    msg: "Something went wrong, Please try again!",
  });
};

module.exports = errorHandlerMiddleware;
