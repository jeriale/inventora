const service = require('./tasks.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function listAllTasks(req, res) {
  res.json({
    data: {
      active: await service.getAllActiveTasks(),
      completed: await service.getAllCompletedTasks()
    }
  });
}

async function createTask(req, res) {
  res.json({ data: await service.createTask(req.body.data) });
}

async function updateTaskToComplete(req, res) {
  res.json({ data: await service.updateTaskToComplete(req.body.data) });
}

async function updateTaskToIncomplete(req, res) {
  res.json({ data: await service.updateTaskToIncomplete(req.body.data) });
}

module.exports = {
  listAllTasks: [
    asyncErrorBoundary(listAllTasks)
  ],
  createTask: [
    asyncErrorBoundary(createTask)
  ],
  updateTaskToComplete: [
    asyncErrorBoundary(updateTaskToComplete)
  ],
  updateTaskToIncomplete: [
    asyncErrorBoundary(updateTaskToIncomplete)
  ]
}