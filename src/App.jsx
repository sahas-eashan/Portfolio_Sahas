import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  return showLoader ? (
    <Loader 
      show 
      onComplete={() => setShowLoader(false)} 
    />
  ) : (
    <Layout />
  );
}