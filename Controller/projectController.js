import Project from '../Model/Project.js';
import Logo from  '../Model/Logo.js';
import User from  '../Model/User.js';
export async function getProjects  (req, res)  {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export async function getProjectById  (req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




export async function createProject (req, res)  {
  const { projectName, domain, domainDetails, projectLogo, projectColor, slogan, moreDescription, name } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create the project with the found user's ID
    const project = new Project({
      projectName,
      domain,
      domainDetails,
      projectLogo,
      projectColor,
      slogan,
      moreDescription,
      userId: user._id,
    });

    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export async function updateProject  (req, res)  {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export async function deleteProject  (req, res)  {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

