const { Router } = require('express');

const { signup, login, logout } = require('../../controllers/api/users');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
