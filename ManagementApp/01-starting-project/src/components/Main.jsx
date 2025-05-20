import logo from "../assets/no-projects.png";
import Form from "./Form";

export default function Main({ openForm, onCreate, onClose }) {
  return (
    <main className="flex items-center justify-center w-full">
      {openForm ? (
        <Form onClose={onClose} />
      ) : (
        <div className="text-center">
          <img
            className="w-16 h-16 object-contain mx-auto"
            src={logo}
            alt="notepad"
          />
          <h2 className="font-bold text-xl m-5 text-stone-700">
            No Project Selected
          </h2>
          <p>Select a project or get started with a new one</p>
          <button
            onClick={onCreate}
            className="bg-black text-stone-200 border-2 p-2 mt-5 border-transparent rounded-md"
          >
            Create new project
          </button>
        </div>
      )}
    </main>
  );
}
