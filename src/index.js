import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./componenets/loginadmin";
import AdminDashboard from "./componenets/AdminDashboard";
import Partner from "./routes/Partner";
import Indivisual from "./routes/Indivisual";
import Enterprise from "./routes/Enterprise";
import Message from "./routes/message";
import MessageInd from "./routes/messageIndivisual";
import MessageEnt from "./routes/messageEnterprise";

import PartnerPass from "./Passwords/PartnerPass";
import IndivisualPass from "./Passwords/IndivisualPass";
import EnterprisePass from "./Passwords/EnterprisePass";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/partnerpass" element={<PartnerPass />} />
          <Route path="/indivisualpass" element={<IndivisualPass />} />
          <Route path="/enterprisepass" element={<EnterprisePass />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/indivisual" element={<Indivisual />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/message" element={<Message />} />
          <Route path="/messageInd" element={<MessageInd />} />
          <Route path="/messageEnt" element={<MessageEnt />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
