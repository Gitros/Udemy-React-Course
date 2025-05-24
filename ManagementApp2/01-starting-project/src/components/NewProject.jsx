import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem]">
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
