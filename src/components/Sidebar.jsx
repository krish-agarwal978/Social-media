import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className="sidebar text-bg-dark p-3"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "280px",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
        zIndex: 1040,
      }}
    >
      {/* Close Button */}
      <button
        className="btn btn-sm btn-outline-light position-absolute"
        style={{ top: "15px", right: "15px" }}
        onClick={onClose}
        aria-label="Close Sidebar"
      >
        <FaTimes />
      </button>

      {/* Brand */}
      <Link
        to="/"
        className="d-flex align-items-center mb-4 text-white text-decoration-none"
        onClick={onClose}
      >
        <span className="fs-4">Navigation</span>
      </Link>

      <hr />

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-post"
            onClick={onClose}
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active" : ""}`
            }
          >
            Create Post
          </NavLink>
        </li>
      </ul>

      <hr />

      {/* User */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://github.com/mdo.png"
            alt="user"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>krish</strong>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
