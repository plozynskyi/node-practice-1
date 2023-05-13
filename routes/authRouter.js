const { Router } = require('express');

const router = Router();

router.post('/signup');
router.post('/login');
router.post('/logout');

module.exports = { authRouter: router };
