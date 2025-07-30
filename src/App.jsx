import React, { useState } from "react";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import ProjectsHome from "./components/ProjectsHome";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  if (showLoader) {
    return <Loader show onComplete={() => setShowLoader(false)} />;
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
