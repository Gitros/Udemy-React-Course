import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Form from "./components/Form";

import { useState } from "react";
import Project from "./components/Project";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState();
  const [projectState, setProjectState] = useState([]);

  const openForm = () => setIsOpenForm(true);

  const saveProject = (project) =>
    setProjectState((prevProjects) => [...prevProjects, project]);

  const onAddTaskToProject = (projectId, newTask) => {
    const updatedProjects = projectState.map((project) => {
      if (project.id === projectId) {
        return {
          ...project,
          tasks: [...project.tasks, newTask],
        };
      } else {
        return project;
      }
    });

    setProjectState(updatedProjects);
    setSelectedProject(updatedProjects.find((p) => p.id === projectId));
  };

  const closeForm = () => setIsOpenForm(false);

  return (
    <div className="flex">
      <Sidebar
        onCreate={openForm}
        projectState={projectState}
        onSelect={setSelectedProject}
      />
      {!isOpenForm && !selectedProject && <Main onCreate={openForm} />}
      {!isOpenForm && selectedProject && (
        <Project
          selectedProject={selectedProject}
          onAddTask={onAddTaskToProject}
        />
      )}
      {isOpenForm && !selectedProject && (
        <Form onClose={closeForm} onAddProject={saveProject} />
      )}
    </div>
  );
}

export default App;
