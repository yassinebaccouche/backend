import express from 'express';


import  {getProjects,getProjectById,createProject,updateProject,deleteProject } from"../Controller/projectController.js" ;

const router = express.Router();
// GET all projects
router.get('/', getProjects);

// GET a project by ID
router.get('/:id', getProjectById);

// POST a new project
router.post('/', createProject );

// PUT update a project
router.put('/:id', updateProject);

// DELETE a project
router.delete('/:id',deleteProject);


export default router;