const router = require("express").Router();
const rmtControllers = require("../../controllers/rmtControllers");

router
  .route("/createMessage")
  .post(rmtControllers.createMessage);

module.exports = router;
