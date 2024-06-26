const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/', registerController.getRegisterPage);
router.post('/', registerController.postRegister);

module.exports = router;
