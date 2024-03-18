import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header-container">
      <header className="blog-header">
        <Navbar />
        <h1 className="center-text">Clean Blog </h1>
        <span className="center-span"> A Blog Theme by Start Bootstrap</span>
      </header>
    </div>
  );
}
