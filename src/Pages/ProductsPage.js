import { useEffect, useState } from "react";
import ColorFilter from "../Components/Filters/ColorFilter";
import ProductList from "../Components/Products/ProductList";
import products from "../deals.json";
import JumpToTop from "../Components/UI/JumpToTop";

const Products = () => {
  const [colors, setColors] = useState(new Set());
  const [filteredColors, setFilteredColors] = useState(new Set());

  const addColors = () => {
    const newColors = new Set();

    products.Deals.Items.forEach((item) => {
      newColors.add(item.Details.Color);
    });

    setColors(Array.from(newColors));
    setFilteredColors(newColors);
  };

  const onFilterColorsHandler = (checkedColors) => {
    console.log(checkedColors.size);
    checkedColors.size === 0
      ? setFilteredColors(new Set(colors))
      : setFilteredColors(checkedColors);
  };

  useEffect(() => {
    addColors();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="w-9/12 mx-auto border-t border-black/30">
        <ColorFilter
          colors={colors.length !== 0 ? colors : null}
          onFilterColorsHandler={onFilterColorsHandler}
        />
        <ProductList filteredColors={filteredColors} />
      </div>
      <JumpToTop />
    </div>
  );
};

export default Products;
