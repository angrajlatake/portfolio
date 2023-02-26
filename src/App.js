import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SmoothScroll from "./Components/Function/SmoothScroll";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <SmoothScroll>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
