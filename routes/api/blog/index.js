const router = require('express').Router();
const { getAllBlogs } = require('../../../controllers/blogController');

router.route('/')
    .get(getAllBlogs);

module.exports = router;
