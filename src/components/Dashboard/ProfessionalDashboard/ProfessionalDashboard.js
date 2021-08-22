import React, { useState } from 'react';
import './ProfessionalDashboard.css'
import ResponsiveSidebar from '../ResponsiveSidebar/ResponsiveSidebar'
import Main from '../main/Main'
import Sidebar from '../sidebar/Sidebar'

const ProfessionalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () =>{
      setSidebarOpen(true);
  };

  const closeSidebar = () =>{
    setSidebarOpen(false);
};
  return (
    <div className="dashboard__container">
      <ResponsiveSidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default ProfessionalDashboard;