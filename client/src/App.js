import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages//home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Jobs from './pages/jobs/Jobs';
import Contact from './pages/contact/Contact';
import AddProjectType from "./adminPages/addProjectType/AddProjectType.jsx";
import AddProject from './adminPages/addProject/AddProject';
import AddJob from './adminPages/addJobs/AddJob';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/addprojecttype" element={<AddProjectType />} />
        <Route path="/admin/addproject" element={<AddProject />} />
        <Route path="/admin/addjob" element={<AddJob />} />
      </Routes>
    </div>
  );
};

export default App;
