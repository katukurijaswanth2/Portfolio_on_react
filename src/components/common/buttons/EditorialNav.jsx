import { useNavigate } from "react-router-dom";
import "./EditorialNav.css";

/**
 * Editorial top navigation.
 *
 * Props:
 *  - label:       text on the back button (default "Return")
 *  - meta:        text on the right (default "About — 2026")
 *  - pagePadding: the horizontal padding of the parent wrapper, e.g. "24px".
 *                 The bar uses the inverse (negative margin) so it spans 100%
 *                 of the container including that padding.
 */
export default function EditorialNav({
  label = "Return",
  meta = "About — 2026",
  pagePadding = "0px",
}) {
  const navigate = useNavigate();

  return (
    <nav
      className="editorial-nav"
      aria-label="Page navigation"
      style={{ "--page-padding": pagePadding }}
    >
      <div className="editorial-nav__row">
        <button
          type="button"
          className="editorial-nav__back"
          onClick={() => navigate(-1)}
        >
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 11 3 3M3 10V3h7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {label}
        </button>

        <span className="editorial-nav__meta">{meta}</span>
      </div>
    </nav>
  );
}