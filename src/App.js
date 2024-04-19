import "./App.css";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header/Header";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductsPage from "./Pages/ProductsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
