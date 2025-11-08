import React from "react";

const Card = ({
  title,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  offers,
  details,
}) => {
  return (
    <>
      <div className="bg-gray-800 my-4 rounded-2xl">
        <div className=" rounded-lg p-5 w-full flex justify-between items-center">
          <div className="img-box w-[400px] flex justify-center items-center">
            <img src={image} alt={title} className="h-[200px]" />
          </div>
          <div className="self-start text-left w-[60%]">
            <h2 className="text-xl text-white">{title}</h2>
            <span className="text-md text-gray-500 mb-2 inline-block">
              ⭐{rating} | {reviews}
            </span>
            <ul className="text-gray-300 list-disc ml-5">
              {details.map((item, i) => {
                return (
                  <>
                    <li key={i}>{item}</li>
                  </>
                );
              })}
            </ul>
            <div className="offers mt-5">
              <p class="text-green-500 mb-1">{offers.exchangeOffer}</p>
              <a
                href="https://sbi.co.in/"
                target="_blank"
                class="text-green-300"
              >
                {offers.bankOffer}
              </a>
            </div>
          </div>
          <div className="price-info flex flex-col g-2">
            <span class="text-2xl text-white">{price}</span>
            <span className="text-right text-gray-500 line-through">
              {originalPrice}
            </span>
            <span className="text-green-500 text-right">{discount}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
