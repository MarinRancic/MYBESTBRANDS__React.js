import ProductDetails from "../Components/Products/ProductDetails";
import JumpToTop from "../Components/UI/JumpToTop";

const ProductDetailsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-9/12 mx-auto border-t border-b border-black/30">
        <ProductDetails />
      </div>
      <JumpToTop />
    </div>
  );
};

export default ProductDetailsPage;
