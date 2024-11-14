import React from "react";
import "./../styles/page/AdminDashboard.scss"; 

const AdminDashboardCommands = () => {
  return (
    <div className="column commandes">
      <h2>Commandes</h2>
      <ul>
        {[...Array(8)].map((_, index) => (
          <li key={index}>
            
            <span>List item</span>
            <span>Validé</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboardCommands;
