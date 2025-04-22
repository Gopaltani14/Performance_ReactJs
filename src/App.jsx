import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import SampleForm from "./SampleForm";
import DataGrid from "./DataGrid";
import Chart from "./Chart";

// Move the navigation logic inside a component rendered within <BrowserRouter>
function Navigation() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/form");
  };

  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li>
          <Link to="/datagrid">Datagrid</Link>
        </li>
        <li>
          <Link to="/form">Sample Form (Route)</Link>
        </li>
        <li>
          <p
            onClick={goToForm}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Sample Form (Logical)
          </p>
        </li>
        <li>
          <p
            onClick={() => navigate("/chart")}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Load Chart
          </p>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: "1rem" }}>
        <Navigation />
        <hr />
        <Routes>
          <Route path="/datagrid" element={<DataGrid />} />
          <Route path="/form" element={<SampleForm />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
