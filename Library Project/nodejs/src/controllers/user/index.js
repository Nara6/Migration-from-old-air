const express = require('express');

const router = express.Router();

router.use('/user', require('./user.controller'))
router.use('/user-identity', require('./userIdentity.controller'))
router.use('/borrow', require('./borrow.controller'))

module.exports = router
