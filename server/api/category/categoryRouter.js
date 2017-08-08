var router = require("express").Router();
var logger = require("../../util/logger");
var categoryController = require("./categoryController");

router.param('id', categoryController.params);

router.route('/')
    .get(categoryController.get)
    .post(categoryController.post);

router.route('/:id')
    .get(categoryController.getOne)
    .put(categoryController.put)
    .delete(categoryController.delete);

module.exports = router;