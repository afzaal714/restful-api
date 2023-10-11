var express = require('express');
var router = express.Router();
const UserController = require('../controller/user.controller');

router.get(`/:UserID`, UserController.findByID);
router.post(`/`, UserController.create);
router.patch(`/:UserID`, UserController.update);
router.delete(`/:UserID`, UserController.deleteByID);

module.exports = router;