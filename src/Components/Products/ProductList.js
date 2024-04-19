import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "../../deals.json";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const imageUrl = "https://cdn.mybestbrands.de";

  const navigate = useNavigate();

  const onRedirectDetailsHandler = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-2 ml:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 items-center mb-52">
      {products.Deals.Items.map((item) => {
        const discount =
          item.Pricing.DiscountedPrice.Amount - item.Pricing.Price.Amount !== 0
            ? true
            : false;
        const percentage =
          (item.Pricing.DiscountedPrice.Amount / item.Pricing.Price.Amount) *
          100;

        if (props.filteredColors?.has(item.Details.Color)) {
          return (
            <div
              key={item.DealID}
              className="flex flex-col h-80 min-w-60 leading-5 pb-10 cursor-pointer relative"
            >
              <img
                className="mb-4 transition ease-in duration-200 transform hover:grayscale h-4/6"
                src={`${imageUrl}${item.Details.Media.ThumbnailImagePath}`}
                alt={item.Brand.Name}
                onClick={() => {
                  onRedirectDetailsHandler(item.DealID);
                }}
              ></img>
              <span>{item.Brand.Name}</span>
              <span>{item.Details.DealName}</span>
              <div>
                {discount && (
                  <span className="text-disPrice mr-4">
                    {item.Pricing.DiscountedPrice.FormattedString}{" "}
                    {item.Pricing.Price.Currency}
                  </span>
                )}
                <span className={`${discount ? "line-through" : ""}`}>
                  {item.Pricing.Price.FormattedString}{" "}
                  {item.Pricing.Price.Currency}
                </span>
              </div>
              {discount && (
                <span className="text-lPrice text-sm">
                  Lowest price in last 30 days:{" "}
                  {item.Pricing.LowestPrice.FormattedString}{" "}
                  {item.Pricing.LowestPrice.Currency}
                </span>
              )}
              {discount && (
                <span className="absolute text-white bg-black bottom-36 left-0">
                  -{100 - Math.ceil(percentage)}%
                </span>
              )}
              <div className="border-t border-gray-300 absolute bottom-0 w-full flex justify-between hover:cursor-default">
                <NavLink to="/favorites">
                  <FontAwesomeIcon
                    className="hover:cursor-pointer pt-2"
                    icon={faHeart}
                  />
                </NavLink>
                <NavLink className="pt-2" to="/ZumShop">
                  <span className="font-semibold hover:text-labelHover hover:cursor-pointer">
                    ZUM SHOP
                  </span>
                </NavLink>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductList;
