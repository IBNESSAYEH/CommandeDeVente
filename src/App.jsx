import "./App.css";
import MangementSale from "./components/achat/MangementSale";
import Layout from "./components/layout/Layout";
import { AppProvider } from "./context/AppContext";
import { ProductProvider } from "./context/ProductContext";
import SalesOrderPage from "./pages/SalesOrderPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <ProductProvider>
        <Router>
        <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Navigate to="/commercial" replace />} />
         <Route path="/commercial" element={<SalesOrderPage />} />
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Route>
    </Routes>
        </Router>
      </ProductProvider>
    </AppProvider>
  );
}

export default App;
