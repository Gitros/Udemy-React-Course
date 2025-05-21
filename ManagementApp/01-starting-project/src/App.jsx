import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Form from "./components/Form";

import { useState } from "react";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [projectState, setProjectState] = useState([]);

  const openForm = () => setIsOpenForm(true);

  const saveProject = (project) =>
    setProjectState((prevProjects) => [...prevProjects, project]);

  const closeForm = () => setIsOpenForm(false);

  return (
    <div className="flex">
      <Sidebar onCreate={openForm} projectState={projectState} />
      {!isOpenForm ? (
        <Main onCreate={openForm} />
      ) : (
        <Form onClose={closeForm} onAddProject={saveProject} />
      )}
    </div>
  );
}

export default App;
