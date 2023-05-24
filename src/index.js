import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./componenets/loginadmin";
import AdminDashboard from "./componenets/AdminDashboard";
import Partner from "./routes/Partner";
import Message from "./routes/message";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/Message" element={<Message />} />


        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);