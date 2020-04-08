const {uuid} = require('uuidv4');

const projects = [];

function list(request, response) {
    return response.json(projects);
}

function create(req, res) {
  
    const {title, owner} = req.body;
    const project = {id: uuid(),title, owner}
    projects.push(project)
    return res.status(201).json(project);
}

function update(req, res) {
    const {id} = req.params;
    
    const projectIndex = projects.findIndex(project => project.id === id);
  
    if (projectIndex < 0) {
      return res.status(404).json({errorMessage: 'Project Id Not Found'});
    }
    
    const {title, owner} = req.body;
  
    projects[projectIndex] = {...projects[projectIndex], title, owner};
  
    return res.json(projects[projectIndex]);
}

function remove(req, res) {
    const {id} = req.params;
    
    const projectIndex = projects.findIndex(project => project.id === id);
  
    if (projectIndex < 0) {
      return res.status(404).json({errorMessage: 'Project Id Not Found'});
    }
  
    projects.splice(projectIndex, 1);
    return res.status(204).send();
}

module.exports = {
    list: list,
    create: create,
    update: update,
    remove: remove
};