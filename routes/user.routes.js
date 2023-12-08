const express = require('express');

const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const {
  getUserInfo,
  register
} = require('../controllers/user.controller');

router.get('/', authMiddleware, getUserInfo);
router.post('/', register);

module.exports = router;
