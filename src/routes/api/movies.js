const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/movieController');

router.get('/', moviesAPIController.index);
router.get('/:id', moviesAPIController.show);

module.exports = router;