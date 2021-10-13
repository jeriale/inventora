const knex = require('../db/connection');

const getAllActiveTasks = () =>
  knex('tasks')
    .where({ completed: false })
    .select('*');

const createTask = data =>
  knex('tasks')
    .insert({ ...data });

const getAllCompletedTasks = () =>
  knex('tasks')
    .where({ completed: true})
    .select('*');

const updateTaskToComplete = data =>
  knex('tasks')
    .where({ id: data.id })
    .update({ completed: true });

const updateTaskToIncomplete = data =>
  knex('tasks')
    .where({ id: data.id })
    .update({ completed: false });

module.exports = {
  getAllActiveTasks,
  createTask,
  getAllCompletedTasks,
  updateTaskToComplete,
  updateTaskToIncomplete
}