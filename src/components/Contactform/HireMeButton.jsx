import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const styles = `
.hire-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  font-family: inherit;
}

.hire-button .hire-icon {
  width: 24px;
  height: 24px;
  color: #fff;
  transition: 400ms;
}

.hire-button .hire-text {
  margin: 0;
  color: white;
  font-weight: 700;
  font-size: 1em;
  transition: 400ms;
}

.hire-button:hover,
.hire-button:focus-visible {
  background-color: transparent;
}

.hire-button:hover .hire-text,
.hire-button:focus-visible .hire-text {
  color: #181717;
}

.hire-button:hover .hire-icon,
.hire-button:focus-visible .hire-icon {
  color: #181717;
}
`;

/**
 * "Hire me" button with a Font Awesome icon (styles included).
 *
 * Install once:
 *   npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
 *
 * Usage: <HireMeButton to="/contact" />
 *        <HireMeButton to="/contact" text="Work with me" />
 */
export default function HireMeButton({ to = "/about", text = "KnowMe" }) {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <button type="button" className="hire-button" onClick={() => navigate(to)}>
        <FontAwesomeIcon icon={faHandshake} className="hire-icon" />
        <p className="hire-text">{text}</p>
      </button>
    </>
  );
}