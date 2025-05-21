export default function Input({ label, textarea, ref, ...props }) {
  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="bg-gray-300 p-2 rounded w-96"
          {...props}
        />
      ) : (
        <input ref={ref} className="bg-gray-300 p-2 rounded w-96" {...props} />
      )}
    </>
  );
}
