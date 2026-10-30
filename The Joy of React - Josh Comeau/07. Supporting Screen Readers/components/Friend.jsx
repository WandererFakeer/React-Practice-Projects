import VisuallyHidden from "./VisuallyHidden.jsx";

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && <VisuallyHidden> (Online)</VisuallyHidden>}
    </li>
  );
}

export default Friend;
