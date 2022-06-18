const apiRoute = require("express").Router();

const tipsRouter = require("./tipRouter");
const feedbackRouter = require("./feedbackRouter");

apiRoute.use("/tips", tipsRouter);
apiRoute.use("/feedback", feedbackRouter);

module.exports = apiRoute;
