import { useRef } from "react";

import Input from "./Input";

export default function Project({ selectedProject, onAddTask }) {
  const task = useRef();

  const onTaskCreate = () => {
    const enteredTask = task.current.value;
    onAddTask(selectedProject.id, enteredTask);
  };

  return (
    <div className="flex flex-col w-2/3 m-10">
      <div className="flex justify-between">
        <h1 className="text-6xl font-bold text-stone-700">
          {selectedProject.title}
        </h1>
        <button>Delete</button>
      </div>
      <p className="mt-20 text-2xl">{selectedProject.date}</p>
      <p className="mt-20 text-2xl">{selectedProject.description}</p>
      <hr className="my-6" />
      <h1 className="text-6xl font-bold mb-5 text-stone-700">Tasks</h1>
      <div className="flex">
        <Input ref={task} />
        <button onClick={onTaskCreate} className="ml-8 text-3xl text-stone-700">
          Add task
        </button>
      </div>
      <ul className="mt-4 list-disc list-inside">
        {selectedProject.tasks.map((task, index) => (
          <li key={index} className="text-lg text-stone-700">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
