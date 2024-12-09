import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormDetails from "./pages/form/FormDetails"; // Import FormDetails
import EmailVerification from "./pages/layoutcard/EmailVerification";
import LayoutCard from "./pages/layoutcard/LayoutCard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Page */}
        <Route
          path="/"
          element={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "50%", background: "#1e3c72" }}>
                <LayoutCard />
              </div>
              <div style={{ width: "50%", background: "#fff" }}>
                <EmailVerification />
              </div>
            </div>
          }
        />

        {/* Form Details Page */}
        <Route path="/form-details" element={<FormDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
