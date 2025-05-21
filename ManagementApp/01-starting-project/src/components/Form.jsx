import { useRef } from "react";
import Project from "../models/Project.js";

import Input from "./Input";

export default function Form({ onClose, onAddProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function onSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    const project = new Project({
      id: Date.now(),
      title: enteredTitle,
      description: enteredDescription,
      enteredDate: enteredDate,
      tasks: [],
    });

    onAddProject(project);
    onClose();
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-end gap-5 font-bold">
        <button className="px-4 py-2 bg-gray-200 rounded-xl" onClick={onClose}>
          Cancel
        </button>
        <button
          onClick={onSave}
          className="text-white box-border bg-black px-4 py-2 rounded-xl"
        >
          Save
        </button>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 w-96 uppercase text-stone-700"
      >
        <Input label="Title" ref={title} />
        <Input label="Description" textarea ref={description} />
        <Input label="Due date" type="date" ref={date} />
      </form>
    </div>
  );
}
