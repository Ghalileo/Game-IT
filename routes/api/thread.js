const router = require("express").Router();
const threadsController = require("../../controllers/threadsController");
const commentsController = require("../../controllers/commentsController");


router.route("/")
    .get(threadsController.findAll)
    .post(threadsController.create);

router.route("/:id")
    .delete(threadsController.remove)
    .put(threadsController.update)
    .post(threadsController.create)
    .get(commentsController.findById)
    .post(commentsController.create)
    .put(commentsController.update)
    .delete(commentsController.remove);

    module.exports = router;