import "./App.css";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header/Header";
import AutoScrollToTop from "./Components/Utils/AutoScrollToTop";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductsPage from "./Pages/ProductsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AutoScrollToTop />
      <Header />
      <Routes>
        <Route index element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
