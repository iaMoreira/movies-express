const express = require('express');
const router = express.Router();
const genresAPIController = require('../../controllers/api/genreController');

router.get('/', genresAPIController.index);
router.get('/:id', genresAPIController.show);

module.exports = router;