const {handleCreateuser} = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/createuser", handleCreateuser);

module.exports = router;
