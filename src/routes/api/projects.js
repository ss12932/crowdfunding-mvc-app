const { Router } = require('express');

const {
  createProject,
  deleteProject,
} = require('../../controllers/api/projects');

const router = Router();

router.post('/', createProject);
router.delete('/:id', deleteProject);
module.exports = router;
