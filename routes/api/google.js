const router = require("express").Router();
const googleController = require("../../controllers/googleController");
console.log('google api router')

// Matches with "/api/google"
router
  .route("/")
  .get(googleController.findAll);

module.exports = router;
