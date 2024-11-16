import React from "react";
import { useEffect, useState } from "react";
import "./../styles/page/AdminDashboard.scss"; 
import axios from "axios";

const AdminDashboardCommands = () => {

  const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
          try {  
            const response = await axios.get("http://localhost:8000/api/validatedorders",
              {
                  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
              });
            setOrders(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
          }
        };
    
        fetchOrders();
      }, []);

  return (
    <div className="column commandes">
      <h2>Commandes validées</h2>
      {orders && orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <span>{order.user.name}</span>
              <span>{order.total_amount}€</span>
              <span>{order.date}</span>
              <button className="">Détail</button>
            </li>
          ))}
        </ul>
    ) : (
      <p className="text-base">Aucune commande n'a été validée pour le moment.</p>
    )}
    </div>
  );
};

export default AdminDashboardCommands;
