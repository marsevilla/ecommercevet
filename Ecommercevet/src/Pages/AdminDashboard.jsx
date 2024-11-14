import React from "react";
import "./../styles/page/AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      {/* Left Column: Commandes */}
      <div className="column commandes">
        <h2>Commandes</h2>
        <ul>
          <li>
            <div className="icon">A</div>
            <span>Commande 1</span>
            <input type="checkbox" disabled />
          </li>
          <li>
            <div className="icon">A</div>
            <span>Commande 2</span>
            <input type="checkbox" disabled />
          </li>
          {[...Array(8)].map((_, index) => (
            <li key={index}>
              <div className="icon">A</div>
              <span>List item</span>
              <input type="checkbox" disabled />
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Column: Produits */}
      <div className="column produits">
        <h2>Produits</h2>
        {[...Array(4)].map((_, index) => (
          <div className="product-item" key={index}>
            <img
              src="https://via.placeholder.com/50"
              alt="product"
              className="product-img"
            />
            <span>Doudoune</span>
            <div className="actions">
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Utilisateurs */}
      <div className="column utilisateurs">
        <h2>Utilisateurs</h2>
        <ul>
          <li>Pierre Chou</li>
          <li>Alice Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
