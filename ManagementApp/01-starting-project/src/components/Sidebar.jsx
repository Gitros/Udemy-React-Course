export default function Sidebar({ onCreate, projectState, onSelect }) {
  return (
    <div className="w-1/3 h-screen p-4 mt-5 bg-black text-white box-border text-left rounded-md">
      <h1 className="text-xl mb-8 uppercase font-bold">Your Projects</h1>
      <button
        onClick={onCreate}
        className="text-stone-400 bg-stone-700 p-3 mb-4 border-2 border-transparent rounded-md "
      >
        + Add Projects
      </button>
      <div>
        <p className="text-stone-300">Learning react</p>
        <ol className="pt-4">
          {projectState.map((project) => (
            <li key={project.id} onClick={() => onSelect(project)}>
              {project.title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
