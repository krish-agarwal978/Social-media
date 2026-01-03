import { useContext } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { PostList } from "../store/post-list-store.jsx";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const title = post?.title ?? "";
  const body = post?.body ?? "";
  const reactions = post?.reactions ?? 0;
  const tags = Array.isArray(post?.tags) ? post.tags : [];
  const userLabel = post?.userId ? String(post.userId) : "Unknown user";
  const imageSrc =
    typeof post?.img === "string" && post.img.trim().length > 0
      ? post.img
      : "https://placehold.co/600x400/f8f9fa/6c757d?text=Post+Image";

  return (
    <div
      className="card shadow-sm border-0 rounded-4 overflow-hidden custom-post-card"
      style={{
        width: "300px",
        minHeight: "100px",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* 1. Card Header (User Info) */}
      <div className="card-header bg-white border-0 d-flex align-items-center p-3">
        <CgProfile size={40} className="me-2" />
        <div>
          <h6 className="mb-0 fw-bold text-dark">{userLabel}</h6>
        </div>
      </div>

      {/* 2. Card Image (Optional) */}
      <img
        src={imageSrc}
        className="card-img-top object-fit-cover"
        alt="Post Content"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      {/* 3. Card Body */}
      <div className="card-body p-4">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge bg-primary bg-opacity-10 text-primary me-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <h5 className="card-title fw-bold mb-3">{title}</h5>

        <p className="card-text text-muted lh-base">{body}</p>
      </div>

      {/* 4. Card Footer (Actions) */}
      <div className="card-footer bg-white border-0 p-3 d-flex justify-content-between align-items-center">
        {/* Left: Interactions */}
        <div className="d-flex gap-3">
          <button className="btn btn-sm btn-outline-danger border-0 rounded-pill d-flex align-items-center gap-1">
            <FaHeart /> <span>{reactions}</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div>
          <button
            className="btn btn-sm btn-outline-danger border-0 rounded-circle"
            type="button"
            onClick={() => deletePost(post.id)}
            aria-label="Delete post"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
