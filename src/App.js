import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
// import Login from './components/Login';
import Merchants from "./components/Merchants";
import PuchaseHistory from "./components/Purchase_history";
import Settings from "./components/settings";
import AddForm from "./components/add_products";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/merchants" exact element={<Merchants />} />
        <Route path="/history" exact element={<PuchaseHistory />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/add" exact element={<AddForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
