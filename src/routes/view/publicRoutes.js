const { Router } = require('express');
const {
  renderSignupPage,
  renderLoginPage,
  renderSingleProjectPage,
  renderHomePage,
} = require('../../controllers/view/publicRoutes');
const router = Router();

router.get('/signup', renderSignupPage);
router.get('/login', renderLoginPage);
router.get('/projects/:id', renderSingleProjectPage);
router.get('/', renderHomePage);
module.exports = router;
