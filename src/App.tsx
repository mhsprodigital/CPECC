import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/ToastContext';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import AdminValidation from './pages/AdminValidation';
import ProjectSubmission from './pages/ProjectSubmission';
import Evaluation from './pages/Evaluation';
import ProjectManagement from './pages/ProjectManagement';
import Accountability from './pages/Accountability';
import PiciteRegister from './pages/PiciteRegister';
import PiciteActivity from './pages/PiciteActivity';
import PiciteDashboard from './pages/PiciteDashboard';
import FundingSubmit from './pages/FundingSubmit';
import FundingStatus from './pages/FundingStatus';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="register" element={<Register />} />
            <Route path="admin-validation" element={<AdminValidation />} />
            <Route path="project-submission" element={<ProjectSubmission />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route path="project-management" element={<ProjectManagement />} />
            <Route path="accountability" element={<Accountability />} />
            <Route path="picite-register" element={<PiciteRegister />} />
            <Route path="picite-activity" element={<PiciteActivity />} />
            <Route path="picite-dashboard" element={<PiciteDashboard />} />
            <Route path="funding-submit" element={<FundingSubmit />} />
            <Route path="funding-status" element={<FundingStatus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
