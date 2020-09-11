const router = require("express").Router();
const rmtControllers = require("../../controllers/rmtControllers");

router
  .route("/create-message")
  .post(rmtControllers.createMessage);

module.exports = router;
