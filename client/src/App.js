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
import AllJobs from './adminPages/allJobs/AllJobs';
import EditJob from './adminPages/editJob/EditJob';
import AllProjectTypes from './adminPages/allProjectTypes/AllProjectTypes';
import EditProjectType from './adminPages/editProjectType/EditProjectType';

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
        <Route path="/admin/alljobs" element={<AllJobs />} />
        <Route path="/admin/editjob/:jobId" element={<EditJob />} />
        <Route path="/admin/allprojecttypes" element={<AllProjectTypes />} />
        <Route path="/admin/editprojecttype/:projectTypeId" element={<EditProjectType />} />
      </Routes>
    </div>
  );
};

export default App;
