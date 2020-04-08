const express = require('express');
const routes = express.Router();

const ProjectsController = require('./controllers/ProjectsController');


routes.get('/projects', ProjectsController.list);  
routes.post('/projects', ProjectsController.create);
routes.put('/projects/:id', ProjectsController.update);
routes.delete('/projects/:id', ProjectsController.remove);

module.exports = routes;