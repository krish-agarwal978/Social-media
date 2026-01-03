import React from 'react';
// import './About.css'; // Optional: If you want custom CSS later

const About = () => {
  return (
    <div className="about-page container-fluid px-0">
      
      {/* 1. HERO SECTION */}
      <div className="bg-dark text-white text-center py-2 mb-5 mt-1 shadow-sm">
        <div className="container py-3">
          <i className="bi bi-people-fill display-1 text-primary mb-3 opacity-75"></i>
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            We are a community of passionate writers and readers. 
            Sharing stories, ideas, and knowledge with the world.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        
        {/* 2. MISSION SECTION (Text Left, Image Right) */}
        <div className="row align-items-center mb-5 g-5">
          {/* Text Column */}
          <div className="col-lg-6">
            <div className="p-2">
              <h2 className="display-6 fw-bold mb-3 text-dark">
                Our Mission
                <span className="text-primary">.</span>
              </h2>
              <p className="text-muted lh-lg mb-4">
                We started this blog with a simple idea: <strong>knowledge should be shared</strong>. 
                Whether you are a developer, a designer, or just a curious mind, 
                our goal is to provide a platform where you can find high-quality content 
                that inspires and educates.
              </p>
              <p className="text-muted lh-lg">
                We believe in the power of community. Every post, every comment, 
                and every share helps build a network of learners who support each other.
              </p>
              <button className="btn btn-primary rounded-pill px-4 mt-2 shadow-sm">
                Join Our Community
              </button>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="bg-light rounded-4 shadow-sm overflow-hidden" style={{ minHeight: "300px" }}>
              {/* Placeholder Image from Unsplash - You can replace 'src' with your own image */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>

        {/* 3. STATS SECTION (3 Columns) */}
        <div className="row text-center mt-5 g-4">
          
          <div className="col-md-4">
            <div className="p-4 border-0 rounded-4 bg-light shadow-sm h-100">
              <i className="bi bi-pencil-fill fs-1 text-primary mb-3"></i>
              <h3 className="fw-bold display-6">1,000+</h3>
              <p className="text-muted mb-0">Articles Published</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border-0 rounded-4 bg-light shadow-sm h-100">
              <i className="bi bi-people fs-1 text-success mb-3"></i>
              <h3 className="fw-bold display-6">50k+</h3>
              <p className="text-muted mb-0">Monthly Readers</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 border-0 rounded-4 bg-light shadow-sm h-100">
              <i className="bi bi-globe fs-1 text-info mb-3"></i>
              <h3 className="fw-bold display-6">100+</h3>
              <p className="text-muted mb-0">Countries Reached</p>
            </div>
          </div>

        </div>

      </div>

      {/* Spacer before footer */}
      <div className="pb-5"></div>
    </div>
  );
};

export default About; 