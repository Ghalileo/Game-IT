const router = require("express").Router();
const userR = require("./user");

router.use("/users", userR);

module.exports = router;