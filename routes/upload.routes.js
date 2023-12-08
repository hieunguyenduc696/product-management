const express = require('express');
const authMiddleware = require('../middlewares/auth');
const upload = require('../config/upload')
const {
    uploadFile,
} = require('../controllers/upload.controller');

const router = express.Router();

router.post('/', authMiddleware, upload.single('image'), uploadFile);

module.exports = router;
