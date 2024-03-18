import React from "react";
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import data from "./data";
import Footer from "./components/Footer";

function App() {
  const blogs = data.map((post) => {
    return <BlogList key={post.id} post={post} />;
  });

  return (
    <div className="App">
      <Header />
      {blogs}
      <div className="button-container">
        <button> Older Posts </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
