import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./services/Service";
import Ecom from "./services/Ecom";
import Mobile from "./services/Mobile";
import Whistle from "./services/Whistle";
import Account from "./services/Account";
import Crm from "./services/Crm";
import School from "./services/School";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/e-commerce" element={<Ecom />} />
          <Route path="/mobile-application" element={<Mobile />} />
          <Route path="/whistle-blowing" element={<Whistle />} />
          <Route path="/accounting-software" element={<Account />} />
          <Route path="/customer-relation-management" element={<Crm />} />
          <Route path="/school-management-solution" element={<School />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
