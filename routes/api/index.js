const router = require("express").Router();
const userR = require("./user");

router.use("/search", userR);

module.exports = router;