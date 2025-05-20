export default function Sidebar() {
  return (
    <div className="w-1/3 h-screen p-4 bg-black text-white box-border text-left rounded-md">
      <h1 className="text-xl mb-8 uppercase font-bold">Your Projects</h1>
      <button className="text-stone-400 bg-stone-700 p-3 mb-4 border-2 border-transparent rounded-md ">
        + Add Projects
      </button>
      <div>
        <p className="text-stone-300">Learning react</p>
        <ol className="pt-4">
          <li>Mastering React</li>
        </ol>
      </div>
    </div>
  );
}
