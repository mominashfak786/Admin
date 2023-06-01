import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./componenets/loginadmin";
import AdminDashboard from "./componenets/AdminDashboard";
import Partner from "./routes/Partner";
import Indivisual from "./routes/Indivisual";
import Message from "./routes/message";
import MessageInd from "./routes/messageIndivisual"
import PartnerPass from "./Passwords/PartnerPass"
import IndivisualPass from "./Passwords/IndivisualPass"

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/partnerpass" element={<PartnerPass />} />
          <Route path="/indivisualpass" element={<IndivisualPass />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/indivisual" element={<Indivisual />} />
          <Route path="/message" element={<Message />} />
          <Route path="/messageInd" element={<MessageInd />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);