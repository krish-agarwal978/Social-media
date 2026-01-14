import {
  FaUser,
  FaHeading,
  FaPen,
  FaHashtag,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaImage,
} from "react-icons/fa";
import { useRef, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from "../store/post-list-store.jsx";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userid = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();
  const image = useRef();

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showValidationToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userIdValue = userid.current.value.trim();
    const titleValue = title.current.value.trim();
    const bodyValue = body.current.value.trim();
    const reactionsRaw = reactions.current.value.trim();
    const reactionsValue = parseInt(reactionsRaw, 10);
    const tagsValue = tags.current.value
      .split(" ")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    const imageFile = image.current?.files?.[0] ?? null;
    const imageSelected = Boolean(imageFile);

    if (
      !userIdValue ||
      !titleValue ||
      !bodyValue ||
      !reactionsRaw ||
      Number.isNaN(reactionsValue) ||
      tagsValue.length === 0 ||
      !imageSelected
    ) {
      showValidationToast("Please fill all the fields");
      return;
    }

    const imgUrl = URL.createObjectURL(imageFile);
    addPost(
      userIdValue,
      titleValue,
      bodyValue,
      reactionsValue,
      tagsValue,
      imgUrl
    );

    userid.current.value = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    if (image.current) image.current.value = "";
    setShowToast(false);
    navigate("/");
  };
  return (
    <div className="create-post-enhanced container-fluid px-0 bg-light">
      {showToast && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1080 }}
        >
          <div
            className="toast show align-items-center text-bg-warning border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">{toastMessage}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                aria-label="Close"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
      {/* 1. COMPACT HERO HEADER */}
      {/* Reduced py-5 to py-3 and mb-5 to mb-4 to save vertical space */}
      <div
        className="bg-primary text-white text-center py-5 mb-4 shadow-sm"
        style={{ background: "linear-gradient(135deg, #0d6efd, #0a58ca)" }}
      >
        <div className="container">
          <h1 className="fs-2 fw-bold mb-1">
            <i className="bi bi-pencil-fill me-2 opacity-75"></i>
            Share Your Story
          </h1>
          <p
            className="small text-white-50 mx-auto mb-0"
            style={{ maxWidth: "500px" }}
          >
            Have something on your mind? Create a new post and share it.
          </p>
        </div>
      </div>

      {/* 2. MAIN CARD CONTAINER */}
      {/* Added maxWidth: "900px" to limit width so it doesn't stretch too wide */}
      <div className="container mb-5 px-4" style={{ maxWidth: "900px" }}>
        <div className="row g-0 justify-content-center shadow rounded-4 overflow-hidden  bg-white">
          {/* LEFT SIDEBAR (Blue Section) */}
          {/* Using d-flex flex-column to align text top/bottom */}
          <div className="col-md-5 d-none d-md-flex bg-primary text-white flex-column justify-content-center p-4 creative-sidebar">
            {/* TOP CONTENT */}
            <div className="mt-2">
              <h3 className="fw-bold fs-4">
                <FaRocket className="me-2 mb-1 text-warning" />
                Creative Space
              </h3>
              <p className="small opacity-75 fst-italic">
                "Either write something worth reading or do something worth
                writing."
                <br />— Benjamin Franklin
              </p>
            </div>

            {/* --- MIDDLE CONTENT: Trending Topics --- */}
            <div className="my-4">
              <p className="small  fw-bold mb-2 text-uppercase ls-1">
                Trending Now
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-white text-primary bg-opacity-2 border border-white border-opacity-25">
                  #Technology
                </span>
                <span className="badge bg-white text-primary bg-opacity-2 border border-white border-opacity-25">
                  #LifeStyle
                </span>
                <span className="badge bg-white text-primary bg-opacity-2 border border-white border-opacity-25">
                  #Coding
                </span>
                <span className="badge bg-white text-primary bg-opacity-2 border border-white border-opacity-25">
                  #Health
                </span>
              </div>
            </div>
            {/* BOTTOM CONTENT */}
            <div className="mb-2">
              <h5 className="fw-bold mb-2 fs-6">
                <FaLightbulb className="text-warning me-2" />
                Writing Tips
              </h5>
              <ul className="list-unstyled opacity-75 small lh-lg mb-0">
                <li>✓ Keep your title catchy.</li>
                <li>✓ Use tags for reach.</li>
                <li>✓ Be respectful & kind.</li>
                <li>✓ Proofread before sending.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          {/* Changed col-lg-7 to col-md-8 to match the 4/8 split */}

          <div className=" col-md-7">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <h5 className="mb-3 text-center text-primary fw-bold ">
                  <FaPen className="me-2" /> Create a New Post
                </h5>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="userId"
                      className="form-label fw-bold small mb-1"
                    >
                      <FaUser className="me-1" /> User ID
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm border-secondary-subtle"
                      id="userId"
                      placeholder="Enter User ID"
                      ref={userid}
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="title"
                      className="form-label fw-bold small mb-1"
                    >
                      <FaHeading className="me-1" /> Post Title
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm border-secondary-subtle"
                      id="title"
                      placeholder="Post title"
                      ref={title}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="body"
                    className="form-label fw-bold small mb-1"
                  >
                    <FaPen className="me-1" /> Post Content
                  </label>
                  {/* Reduced rows from 8 to 4 to decrease height */}
                  <textarea
                    className="form-control border-secondary-subtle"
                    id="body"
                    rows="4"
                    ref={body}
                    placeholder="What's on your mind today?"
                  ></textarea>
                </div>

                {/* --- NEW SECTION: IMAGE UPLOAD --- */}
                <div className="mb-3">
                  <label
                    htmlFor="image"
                    className="form-label fw-bold small mb-1"
                  >
                    <FaImage className="me-1" /> Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control form-control-sm border-secondary-subtle"
                    id="image"
                    accept="image/*"
                    ref={image}
                  />
                </div>
                {/* ---------------------------------- */}

                <div className="mb-3">
                  <label
                    htmlFor="reactions"
                    className="form-label fw-bold small mb-1"
                  >
                    <FaHeart className="me-1" /> Reactions
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-sm border-secondary-subtle"
                    id="reactions"
                    ref={reactions}
                    placeholder="0"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="tags"
                    className="form-label fw-bold small mb-1"
                  >
                    <FaHashtag className="me-1" /> Tags
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm border-secondary-subtle"
                    id="tags"
                    ref={tags}
                    placeholder="#react, #coding"
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm py-2 fw-bold rounded-pill shadow-sm"
                    style={{
                      background: "linear-gradient(45deg, #007bff, #0056b3)",
                      border: "none",
                    }}
                  >
                    Publish Post <i className="bi bi-send-fill ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
