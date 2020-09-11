const router = require("express").Router();
const rmtControllers = require("../../controllers/rmtControllers");

router
  .route("/create-message")
  .post(rmtControllers.createMessage);

router
  .route("/find-all-messages")
  .post(rmtControllers.findAllMessages);

module.exports = router;
