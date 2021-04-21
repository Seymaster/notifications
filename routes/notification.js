const express = require("express");
const router  = express.Router();
const notifController = require("../controllers/notification");



// POST /attendee
router.post("/notification", notifController.createNotifs);


router.get("/notification", notifController.sendNotifs)

module.exports = router;