const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log("a");
    return res.status(err.statusCode).json({ err: err.message });
  }
  console.log("b");
  return res
    .status(500)
    .json({ err: "something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
