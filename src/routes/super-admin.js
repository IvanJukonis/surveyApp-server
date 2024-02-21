const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router();

const controllerSuperAdmin = require('../controllers/super-admin');

router
  .put('/:id', verifyToken, controllerSuperAdmin.updateAdmin)
  .get('/', verifyToken, controllerSuperAdmin.getAllSuperAdmin)
  .get('/:id', verifyToken, controllerSuperAdmin.getSuperAdminById)
  .post('/', controllerSuperAdmin.createSuperAdmin)
  .delete('/:id', verifyToken, controllerSuperAdmin.deleteSuperAdmin);

module.exports = router;
