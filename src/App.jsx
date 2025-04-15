import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import GalaxyCursor from './components/GalaxyCursor';
import LaunchScreen from './components/LaunchScreen';
import { AnimatePresence } from 'framer-motion';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  // const [loading, setLoading] = useState(true);
  return (
    <Router>
      {/* <GalaxyCursor /> */}
      {/* {loading && <LaunchScreen onFinish={() => setLoading(false)} />} */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
