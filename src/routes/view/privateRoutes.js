const { Router } = require('express');
const {
  renderCreateProjectPage,
  renderProfilePage,
} = require('../../controllers/view/privateRoutes');
const router = Router();

router.get('/create-project', renderCreateProjectPage);
router.get('/profile', renderProfilePage);
module.exports = router;
