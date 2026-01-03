import "./FAQ.css";
const FAQ = () => {
  const faqData = [
    {
      id: "One",
      icon: "bi-pencil-square",
      question: "How do I create a new post?",
      answer:
        "To create a post, navigate to the <strong>'Create Post'</strong> tab in the sidebar or header. Fill in the required fields and hit submit. It's that simple!",
      active: true,
    },
    {
      id: "Two",
      icon: "bi-trash3",
      question: "Can I edit or delete my posts?",
      answer:
        "Currently, you can <strong>delete</strong> posts directly from the home feed by clicking the delete icon on your post card. Editing features are being developed.",
      active: false,
    },
    {
      id: "Three",
      icon: "bi-shield-check",
      question: "Who can see my posts?",
      answer:
        "By default, posts are public and visible to anyone browsing the platform.",
      active: false,
    },
    {
      id: "Four",
      icon: "bi-image",
      question: "What image formats are supported?",
      answer:
        "We support standard web formats: JPG, PNG, and WEBP. We recommend keeping images under 5MB for optimal performance.",
      active: false,
    },
  ];

  return (
    <div className="faq-enhanced container-fluid px-0">
      {/* 1. Attractive Hero Header Section */}
      <div className="faq-header bg-dark text-white text-center mt-1 mb-5 shadow-sm">
        <i className="bi bi-chat-quote display-1 text-success mb-3 opacity-75"></i>
        <h1 className="fw-bold display-4">Help Center</h1>
        <p className="lead text-white-50 mx-auto" style={{ maxWidth: "600px" }}>
          Find quick answers to your questions about using the blog platform.
          Can't find what you need? Scroll down to contact us.
        </p>
      </div>

      <div className="container">
        {/* Inner container to align content nicely add defualt padding to left and right */}
        <div className="row g-5">
          {/* g-5 adds gap between columns */}

          {/* 2. FAQ Accordion Column (Left on desktop) */}
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-star-fill text-warning fs-3 me-3"></i>
              <h2 className="mb-0 fw-bold">Most Common Questions</h2>
            </div>

            <div className="accordion" id="faqAccordion">
              {faqData.map((item) => (
                <div className="accordion-item shadow-sm" key={item.id}>
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className={`accordion-button fw-semibold ${
                        !item.active ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={item.active ? "true" : "false"}
                      aria-controls={`collapse${item.id}`}
                    >
                      <i
                        className={`bi ${item.icon} me-3 fs-5 text-success opacity-75`}
                      ></i>
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${
                      item.active ? "show" : ""
                    }`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div
                      className="accordion-body bg-light text-muted lh-lg"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Attractive "Contact Us" Section (Right on desktop) */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "140px", zIndex: 1 }}>
              <div className="contact-card card border-0 shadow bg-white p-4 text-center rounded-4 mt-sm-4 mt-lg-5">
                <i className="bi bi-headset display-3 text-success mb-3 mt-2"></i>
                <h4 className="fw-bold mb-2">Still have questions?</h4>
                <p className="text-muted mb-4 small">
                  Can't find the answer you’re looking for? Our dedicated
                  support team is ready to assist you directly.
                </p>

                <div
                  className="vstack gap-3 mx-auto mb-3"
                  style={{ maxWidth: "250px" }}
                >
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=krishagarwaldps@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark rounded-pill shadow-sm"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    Email Support
                  </a>

                  <button className="btn btn-outline-secondary rounded-pill fw-semibold shadow-sm">
                    <i className="bi bi-telephone me-2"></i>
                    Contact: 487-445-XXXX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer before footer */}
      <div className="my-5 pb-4"></div>
    </div>
  );
};

export default FAQ;
