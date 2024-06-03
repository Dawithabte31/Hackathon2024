const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const sellerauthController = require("../controllers/sellerauthController");
// const userProfile=require('../controllers/userProfile');
router.post("/registerseller", sellerauthController.register);
router.post("/loginseller", sellerauthController.login);
router.post("/logoutseller", sellerauthController.logout);
module.exports = router;
