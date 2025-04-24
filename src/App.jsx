import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SampleForm from "./SampleForm";
import DataGrid from "./DataGrid";
import Chart from "./Chart";
import Images from "./Images";
import "./App.css";

// Move the navigation logic inside a component rendered within <BrowserRouter>
function Navigation() {
  const navLinks = [
    { to: "/datagrid", label: "Datagrid" },
    { to: "/form", label: "Sample Form (Route)" },
    { to: "/images", label: "Load heavy images" },
    { to: "/chart", label: "Load Chart" },
  ];
  return (
    <nav style={{ backgroundColor: "#2294c9", padding: "10px" }}>
      <ul
        style={{
          display: "flex",
          marginLeft: "5px",
          gap: "1rem",
          listStyle: "none",
        }}
      >
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "#2294c9" : "white",
                fontWeight: "bold",
                backgroundColor: isActive ? "#ffffff" : "#2294c9",
                padding: "5px 5px 8px 5px",
                borderRadius: isActive ? "8px 8px 0px 0px" : "0px",
                textDecoration: "none",
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: "1px 0px 0px 0px" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: "#f2f2f2",
            paddingBottom: "6px",
          }}
        >
          ReactJS App
        </h2>
        {/* <hr /> */}
        <div>
          <Navigation />
        </div>
        {/* <hr /> */}
        <Routes>
          <Route path="/datagrid" element={<DataGrid />} />
          <Route path="/form" element={<SampleForm />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
