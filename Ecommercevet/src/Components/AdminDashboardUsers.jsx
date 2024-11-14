import React from "react";
import { useEffect, useState } from "react";
import "./../styles/page/AdminDashboard.scss"; 
import axios from "axios";

const AdminDashboardUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {  
            const response = await axios.get("http://localhost:8000/api/users",
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            );
            setUsers(response.data.users);
          } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
          }
        };
    
        fetchUsers();
      }, []);

  return (
    <div className="column utilisateurs">
        <h2>Utilisateurs</h2>
        {users && users.map((user) => (
          <div className="user-item" key={user.id}>
            <span>{user.name}</span>
            <div className="actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
            </div>
        </div>
        ))}
      </div>
  );
};

export default AdminDashboardUsers;
