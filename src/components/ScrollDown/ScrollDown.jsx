import "./ScrollDown.css";
import { FaChevronDown } from "react-icons/fa";

function ScrollDown({ target }) {
  return (
    <a href={target} className="scroll-down">
      <FaChevronDown />
    </a>
  );
}

export default ScrollDown;