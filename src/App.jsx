import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Furniture from "./view/FurniturePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Furniture />} />
      </Routes>
    </Router>
  );
}

export default App;
