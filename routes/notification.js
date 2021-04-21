const express = require("express");
const router  = express.Router();
const notifController = require("../controllers/notification");
// const schemas = require("../middleware/schemas");
// const { validate } = require("../middleware/helper");


// POST /attendee
router.post("/notif", notifController.createNotifs);


router.get("/notif/:key/:adapter", notifController.sendNotifs)

module.exports = router;