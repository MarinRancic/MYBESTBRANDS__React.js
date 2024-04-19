import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../deals.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faPinterest } from "@fortawesome/free-brands-svg-icons";

const ProductDetails = () => {
  const { id } = useParams();
  const imageUrl = "https://cdn.mybestbrands.de";

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const [productDetails, setProductDetails] = useState({});
  const discount =
    productDetails.Pricing?.DiscountedPrice.Amount -
      productDetails.Pricing?.Price.Amount !==
    0
      ? true
      : false;

  const percentage =
    (productDetails.Pricing?.DiscountedPrice.Amount /
      productDetails.Pricing?.Price.Amount) *
    100;

  const onToggleOpeningHandler = (index) => {
    const updatedState = [...isOpen];
    updatedState[index] = !updatedState[index];
    setIsOpen(updatedState);
  };

  useEffect(() => {
    const product = products.Deals.Items.find((item) => {
      return item.DealID.toString() === id;
    });
    if (!product) {
      navigate("/");
    }
    setProductDetails(product);
  }, [id]);

  return (
    <div className="grid xl:grid-cols-2 grid-rows-1 gap-48 my-10">
      <div className="relative">
        <img
          src={`${imageUrl}${productDetails.Details?.Media.ThumbnailImagePath}`}
          className="xl:w-full w-96 m-auto"
        />
        {discount && (
          <span className="absolute text-white bg-black top-0 left-20 text-xl px-2">
            -{100 - Math.ceil(percentage)}%
          </span>
        )}
      </div>

      <div className="flex flex-col h-full w-full relative">
        <span className="font-semibold">{productDetails.Brand?.Name}</span>
        <span className="text-lg font-playfair italic -mt-1 mb-4">
          {productDetails.Details?.DealName}
        </span>
        <div className="mb-1">
          {discount && (
            <span className="text-disPrice mr-4 text-2xl font-semibold">
              {productDetails.Pricing?.DiscountedPrice.FormattedString}
              {productDetails.Pricing?.Price.Currency}
            </span>
          )}
          <span
            className={`${
              discount ? "line-through border-detailsText px-4 border-l-2" : ""
            } text-detailsDiscount text-2xl font-semibold`}
          >
            {productDetails.Pricing?.Price.FormattedString}
            {productDetails.Pricing?.Price.Currency}
          </span>
          <span className="text-mini no-underline">(incl.VAT)</span>
          <FontAwesomeIcon
            className="hover:cursor-pointer absolute right-0 top-0 text-2xl"
            icon={faHeart}
          />
        </div>
        {discount && (
          <span className="text-detailsText">
            Lowest price in last 30 days:
            {productDetails.Pricing?.LowestPrice.FormattedString}
            {productDetails.Pricing?.LowestPrice.Currency}
          </span>
        )}
        <button className="bg-black w-full text-white relative flex items-center justify-center h-10 hover:bg-black/85 mt-10 mb-5">
          ZUM SHOP <span className="font-semibold">MYTHERESA</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute size-5 right-5 "
          />
        </button>
        <div
          className="font-semibold border-t border-black py-5 relative flex items-center justify-between hover:cursor-pointer transition-all duration-300"
          onClick={() => onToggleOpeningHandler(0)}
        >
          Available sizes
          <FontAwesomeIcon
            className={`absolute right-5 transition-transform duration-300 transform ${
              isOpen[0] ? "-rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </div>
        {isOpen[0] && (
          <div className="pb-5 text-sm">
            {productDetails.Details?.AvailableSizes}
          </div>
        )}
        <div
          className="font-semibold border-t border-black py-5 relative flex items-center hover:cursor-pointer"
          onClick={() => onToggleOpeningHandler(1)}
        >
          Product details
          <FontAwesomeIcon
            className={`absolute right-5 transition-transform duration-300 transform ${
              isOpen[1] ? "-rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </div>
        {isOpen[1] && (
          <div className="pb-5 text-sm">
            {productDetails.Details?.Description}
          </div>
        )}
        <div
          className="font-semibold border-t border-black py-5 relative flex items-center justify-between hover:cursor-pointer"
          onClick={() => onToggleOpeningHandler(2)}
        >
          Shipment
          <FontAwesomeIcon
            className={`absolute right-5 transition-transform duration-300 transform ${
              isOpen[2] ? "-rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </div>
        {isOpen[2] && (
          <div className="pb-5">
            {productDetails.Retailer?.Shippings.map((index) => {
              return (
                <div className="flex flex-col leading-8 text-sm">
                  <span className="font-semibold">{index.Country}</span>
                  <span>{index.DeliveryPeriod}</span>
                  <span className="mb-4">{index.Costs}</span>
                </div>
              );
            })}
          </div>
        )}
        <div
          className={`font-semibold border-t ${
            !isOpen[3] && "border-b"
          } border-black py-5 relative flex items-center justify-between hover:cursor-pointer`}
          onClick={() => onToggleOpeningHandler(3)}
        >
          Payment
          <FontAwesomeIcon
            className={`absolute right-5 transition-transform duration-300 transform ${
              isOpen[3] ? "-rotate-180" : ""
            }`}
            icon={faChevronDown}
          />
        </div>
        {isOpen[3] && (
          <div
            className={`pb-5 text-sm border-black ${isOpen[3] && "border-b"}`}
          >
            {productDetails.Retailer?.PaymentTypes.map((index) => {
              return <span className="mr-3">{index.PaymentType}</span>;
            })}
          </div>
        )}
        <div className="mt-5 flex gap-3">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              className="hover:cursor-pointer"
            />
          </a>
          <a href="https://www.pinterest.com">
            <FontAwesomeIcon
              icon={faPinterest}
              size="xl"
              className="hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
