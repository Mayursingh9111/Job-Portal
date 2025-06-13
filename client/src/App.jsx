import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import DashBoard from "./pages/DashBoard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplictaions from "./pages/ViewApplictaions";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { showRecruiterLogin, companyToken } = useContext(AppContext);
  return (
    <>
      {showRecruiterLogin && <RecruiterLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJobs />} />
        <Route path="/applications" element={<Applications />} />
          {companyToken ? (
            <>
        <Route path="/dashboard" element={<DashBoard />}>
              <Route path="add-job" element={<AddJob />} />
              <Route path="manage-jobs" element={<ManageJobs />} />
              <Route path="view-applications" element={<ViewApplictaions />} />
        </Route>
            </>
          ) : null}
      </Routes>
    </>
  );
}

export default App;
