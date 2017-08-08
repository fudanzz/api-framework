var router = require("express").Router();

router.use('/categories',require('./category/categoryRouter'))

module.exports = router;