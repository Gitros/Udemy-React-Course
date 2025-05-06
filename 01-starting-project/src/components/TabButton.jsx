export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hello wolrd");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
