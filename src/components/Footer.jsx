const Footer = () => {
  return (
    <footer className="footer mt-auto py-2 bg-dark text-white">
      <div className="container text-center">
  
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-2">
          <a href="#" className="text-white text-decoration-none small">Home</a>
          <a href="#" className="text-white text-decoration-none small">Features</a>
          <a href="#" className="text-white text-decoration-none small">Pricing</a>
          <a href="#" className="text-white text-decoration-none small">FAQs</a>
          <a href="#" className="text-white text-decoration-none small">About</a>
        </div>

        {/* Using 'small' class to reduce font size 
           text-white-50 makes it slightly grey (standard footer style)
        */}
        <p className="mb-0 small text-white-50">
          © 2025 Company, Inc
        </p>
      </div>
    </footer>
  );
};

export default Footer;