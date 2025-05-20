import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import { useState } from "react";

function App() {
  const [openForm, setOpenForm] = useState(false);

  function onCreateNewProject() {
    setOpenForm(true);
  }

  function onCloseProject() {
    setOpenForm(false);
  }

  return (
    <div className="flex">
      <Sidebar />
      <Main
        onCreate={onCreateNewProject}
        onClose={onCloseProject}
        openForm={openForm}
      />
    </div>
  );
}

export default App;
