import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = ({ onToggleSidebar, setSelectedtab }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid px-0">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          {/* Sidebar Toggle */}
          <button
            className="btn btn-outline-light me-2 mb-2 mb-lg-0"
            onClick={onToggleSidebar} 
            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>

          {/* Brand */}
          <span className="fs-4 fw-bold text-primary me-3">
            Social Media
          </span>

          {/* Navigation */}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-white" onClick={() => setSelectedtab("Home")}>Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white" onClick={() => setSelectedtab("FAQs")}>FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white" onClick={() => setSelectedtab("About")}>About</a></li>
          </ul>

          {/* Search */}
          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="input-group">
              <span className="input-group-text bg-dark text-white border-secondary">
                <FaSearch />
              </span>
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark border-secondary search-input"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>

          {/* Auth buttons & Readme Trigger */}
          <div className="text-end">
            <button className="btn btn-outline-light me-2">Login</button>
            <button className="btn btn-success me-2">Sign-up</button>
            
            {/* NEW: Readme Trigger Button */}
            {/* Using btn-outline-light to match the header style */}
            <button 
              className="btn btn-warning" 
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#offcanvasReadme" 
              aria-controls="offcanvasReadme"
            >
              Readme
            </button>
          </div>

        </div>
      </div>

      {/* NEW: Offcanvas Body (Right Side) */}
      {/* 'offcanvas-end' puts it on the right side */}
      <div 
        className="offcanvas offcanvas-end text-bg-dark" 
        data-bs-scroll="true" 
        tabIndex="-1" 
        id="offcanvasReadme" 
        aria-labelledby="offcanvasReadmeLabel"
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title" id="offcanvasReadmeLabel">About this Project</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h6 className="text-warning">Social Media Blog Platform</h6>
          <p>
            Welcome to the official Readme for this Social Media application. 
            This platform is designed to connect users through shared content, 
            interactive posts, and real-time updates.
          </p>
          <hr className="border-secondary" />
          <ul className="list-unstyled">
            <li className="mb-2"><strong>v1.0.0:</strong> Initial Release</li>
            <li className="mb-2"><strong>Features:</strong> Dark mode, infinite scroll, user auth.</li>
            <li className="mb-2"><strong>Tech Stack:</strong> React, Bootstrap 5, Vite.</li>
          </ul>
          <p className="small text-secondary mt-4">
            &copy; 2024 Social Media App. All rights reserved.
          </p>
        </div>
      </div>

    </header>
  );
};

export default Header;