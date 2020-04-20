const router = require("express").Router();
const threadsController = require("../../controllers/threadsController");
const commentsController = require("../../controllers/commentsController");


router.route("/")
    .get(threadsController.findAll)
<<<<<<< HEAD
    .post(threadsController.create);
=======
    .post(threadsController.create)
>>>>>>> d5a05898a0d81a25246a9c37a6516af37ef29431

router.route("/:id")
    .delete(threadsController.remove)
    .put(threadsController.update)
    .post(threadsController.create)
    .get(commentsController.findById)
    .post(commentsController.create)
    .put(commentsController.update)
    .delete(commentsController.remove);

    module.exports = router;