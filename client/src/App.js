import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages//home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AddProjectType from "./adminPages/addProjectType/AddProjectType.jsx";
import AddProject from "./adminPages/addProject/AddProject";
import AddJob from "./adminPages/addJobs/AddJob";
import AllJobs from "./adminPages/allJobs/AllJobs";
import EditJob from "./adminPages/editJob/EditJob";
import AllProjectTypes from "./adminPages/allProjectTypes/AllProjectTypes";
import EditProjectType from "./adminPages/editProjectType/EditProjectType";
import PrivateComponent from "./components/adminComponents/privateComponent/PrivateComponent";
import AdminHome from "./adminPages/home/AdminHome";
import Login from "./adminPages/adminLogin/login";
import Register from "./adminPages/adminRegister/Register";
import VerifyAccount from "./adminPages/verify_account/VerifyAccount";
import ResetPassword from "./adminPages/reset_password/ResetPassword";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import WhatsAppLogo from "./components/whatsappLogo/WhatsAppLogo";
import AllProjects from "./adminPages/allProjects/AllProjects";
import EditProject from "./adminPages/editProject/EditProject";
import AllBlogs from "./adminPages/allBlogs/AllBlogs";
import AddBlog from "./adminPages/addBlog/AddBlog";
import EditBlog from "./adminPages/editBlog/EditBlog";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<WhatsAppLogo />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:type" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route
            path="/projectdetails/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route element={<PrivateComponent />}>
            <Route path="/admin/msds" element={<AdminHome />} />
            <Route path="/admin/msds/addprojecttype" element={<AddProjectType />} />
            <Route path="/admin/msds/addproject" element={<AddProject />} />
            <Route path="/admin/msds/addjob" element={<AddJob />} />
            <Route path="/admin/msds/addblog" element={<AddBlog />} />
            <Route path="/admin/msds/allprojects" element={<AllProjects />} />
            <Route path="/admin/msds/allblogs" element={<AllBlogs />} />
            <Route path="/admin/msds/alljobs" element={<AllJobs />} />
            <Route path="/admin/msds/editjob/:jobId" element={<EditJob />} />
            <Route
              path="/admin/msds/allprojecttypes"
              element={<AllProjectTypes />}
            />
            <Route
              path="/admin/msds/editprojecttype/:projectTypeId"
              element={<EditProjectType />}
            />
            <Route
              path="/admin/msds/editproject/:projectId"
              element={<EditProject />}
            />
            <Route
              path="/admin/msds/editblog/:blogId"
              element={<EditBlog />}
            />
          </Route>
          <Route path="/admin/msds/login" element={<Login />} />
          <Route path="/admin/msds/register" element={<Register />} />
          <Route path="/verify/:verifytoken" element={<VerifyAccount />} />
          <Route
            path="/reset-password/:resetpasswordtoken"
            element={<ResetPassword />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
