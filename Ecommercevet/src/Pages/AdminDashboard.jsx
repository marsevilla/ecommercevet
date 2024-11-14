import React from "react";
import "./../styles/page/AdminDashboard.scss";
import AdminDashboardCommands from "../Components/AdminDashboardCommands";
import AdminDashboardProducts from "../Components/AdminDashboardProducts";
import AdminDashboardUsers from "../Components/AdminDashboardUsers";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <AdminDashboardCommands/>
      <AdminDashboardProducts/>
      <AdminDashboardUsers/>
    </div>
  );
};

export default AdminDashboard;
