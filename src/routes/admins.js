const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const adminControllers = require('../controllers/admin');

const router = express.Router();

router
  .get('/', verifyToken, adminControllers.getAdmins)
  .get('/:id', verifyToken, adminControllers.getAdminsById)
  .post('/', verifyToken, adminControllers.createAdmin)
  .put('/:id', verifyToken, adminControllers.updateAdmin)
  .delete('/:id', verifyToken, adminControllers.deleteAdmin);

module.exports = router;
