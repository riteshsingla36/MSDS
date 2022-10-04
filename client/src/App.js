import './App.css';
import {Routes , Route} from "react-router-dom"
import Home from './pages//home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Jobs from './pages/jobs/Jobs';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
