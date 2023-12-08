const express = require('express');
const authMiddleware = require('../middlewares/auth');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/product.controller');

const router = express.Router();


router.get('/list', getAll);
router.get('/:id', getOne);
router.post('/create', authMiddleware, createOne);
router.put('/:id/update', authMiddleware, updateOne)
router.delete('/:id/delete', authMiddleware, deleteOne)

module.exports = router;
