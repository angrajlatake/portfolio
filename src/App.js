import "./App.scss";
import Loader from "./Components/Loader/Loader";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SmoothScroll from "./Components/Function/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <SmoothScroll>
      <div className="App">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}

export default App;
