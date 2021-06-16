import React from 'react';
import { Link, NavLink } from "react-router-dom";
const DashboardPage = () => (
    <div className="dashboard">
      <div className="dashboard_content">

        <h1>Welcome To Sparks Bank</h1>
        <div className="dashboard_content_link">
        <NavLink className="dashboard_link" to="/transactions">Transactions</NavLink>
        <NavLink className="dashboard_link" to="/accounts">Accounts</NavLink>
        <NavLink className="dashboard_link" to="/transfer">Transfer</NavLink>
        </div>
      
      </div>
      
      
    </div>
  );
  export default DashboardPage;
  