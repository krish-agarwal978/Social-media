import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Postlist from "./components/Postlist.jsx";
import FAQ from "./components/FAQ.jsx";
import About from "./components/About.jsx";
import { PostListProvider } from "./store/post-list-store.jsx";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <PostListProvider>
    <div className="d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        selectedtab={selectedtab}
        setSelectedtab={setSelectedtab}
      />
      <div className="flex-grow-1 d-flex flex-column min-vh-100">
        <Header onToggleSidebar={toggleSidebar}
        setSelectedtab={setSelectedtab} 
        />
        <main className="app-content min-vh-100 d-flex flex-column">
         {selectedtab === "Home" && <Postlist />}
          {selectedtab === "Create Post" && <Createpost />}
          {selectedtab === "FAQs" && <FAQ />}
          {selectedtab === "About" && <About />}
        </main>
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
