import Post from "./Post";
import "./Postlist.css";
import { useContext, useMemo, useState } from "react";
import { PostList as postlistdata } from "../store/post-list-store.jsx";

const Postlist = () => {
  const { postList } = useContext(postlistdata);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return postList;

    return postList.filter((post) => {
      const title = String(post?.title ?? "").toLowerCase();
      const body = String(post?.body ?? "").toLowerCase();
      const userId = String(post?.userId ?? "").toLowerCase();
      const tags = Array.isArray(post?.tags) ? post.tags : [];
      const tagsText = tags.map((t) => String(t).toLowerCase()).join(" ");

      return (
        title.includes(q) ||
        body.includes(q) ||
        userId.includes(q) ||
        tagsText.includes(q)
      );
    });
  }, [postList, searchQuery]);

  return (
    <>
      {/* 1. Hero / Welcome Section */}
      <div className="bg-dark text-white text-center py-5 mb-4 mt-1 shadow-sm">
        <div className="container ">
          <h1 className="display-4 fw-bold">Daily Feed</h1>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Discover the latest stories, ideas, and trends from our community.
          </p>

          {/* Optional: Filter/Search Bar Placeholder */}
          <div className="d-flex justify-content-center mt-4">
            <form
              className="bg-white p-1 rounded-pill shadow-sm d-flex"
              style={{ width: "100%", maxWidth: "500px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="form-control border-0 rounded-pill px-4 shadow-none"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary rounded-pill px-4 fw-bold"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. The Grid Container */}
      <div className="postlist-container  mb-5">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Postlist;
