import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import "./index.css";

function App() {

  // Blog data stored in state
  const [blogs] = useState([
    {
      id: 1,
      title: "Introduction to React",
      summary: "Learn the basics of React and components.",
      content:
        "React is a JavaScript library used to build user interfaces. It is component-based and follows a declarative approach..."
    },
    {
      id: 2,
      title: "Understanding useState",
      summary: "Manage state easily with useState hook.",
      content:
        "The useState hook allows functional components to manage local state. It returns a state value and a function to update it..."
    },
    {
      id: 3,
      title: "React SPA Concept",
      summary: "Learn how single-page applications work.",
      content:
        "A Single Page Application loads a single HTML page and dynamically updates content without refreshing the page..."
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);

  // Event Handling
  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="app-container">
      <h1>My Blog</h1>

      {/* SPA Conditional Rendering */}
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} onBack={handleBack} />
      ) : (
        <BlogList blogs={blogs} onSelect={handleSelectBlog} />
      )}
    </div>
  );
}

export default App;