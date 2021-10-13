const router = require('express').Router();
const methodNotAllowed = require('../errors/methodNotAllowed');

const {
  listAllTasks,
  createTask,
  updateTaskToComplete,
  updateTaskToIncomplete
} = require('./tasks.controller');

router.route('/')
  .get(listAllTasks)
  .post(createTask)
  .all(methodNotAllowed);

router.route('/complete')
  .put(updateTaskToComplete)
  .all(methodNotAllowed);

router.route('/incomplete')
  .put(updateTaskToIncomplete)
  .all(methodNotAllowed);

module.exports = router;