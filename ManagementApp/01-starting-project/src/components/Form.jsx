export default function Form({ onClose }) {
  return (
    <div className="flex flex-col w-2/3">
      <div className="flex justify-end gap-5 font-bold">
        <button onClick={onClose}>Cancel</button>
        <button className="text-white box-border bg-black w-24 h-10 rounded-xl">
          Save
        </button>
      </div>
      <form action="" className="flex flex-col uppercase text-stone-700">
        <label className="">Title</label>
        <input className="bg-gray-300" type="text" />
        <label>Description</label>
        <textarea className="bg-gray-300"></textarea>
        <label>Due Date</label>
        <input className="bg-gray-300" type="date" />
      </form>
    </div>
  );
}
