const express = require('express');
const router = express.Router();
const Urlcontroller = require('../controller/url');
const UserAuth = require('../auth/auth');
const verifyToken = require('../auth/verifyToken');

router.post('/shorten', verifyToken, Urlcontroller.postUrl);
router.get('/:shortCode', Urlcontroller.getUrl);
router.post('/login', UserAuth.login);
router.post('/register', UserAuth.register);

module.exports = router;
