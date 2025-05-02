import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const CategoryCard = ({ product }) => {
  const { categoryName } = useParams();

  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const shouldTruncate = product.description.length > 50;
  const displayedText = expanded
    ? product.description
    : product.description.slice(0, 50);
  return (
    <div>
      <div
        className="w-[410px] rounded-[10px] flex-shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden mt-[20px] pb-5"
        onClick={() =>
          navigate(`/categories/${categoryName}/${product.name.toLowerCase()}`)
        }
      >
        <img
          className="w-full h-[301px] object-cover"
          src={product.image}
          alt=""
        />
        <div className="px-[21px]">
          <h5 className="font-bold text-2xl text-textPrimary mt-[10px]">
            {product.name}
          </h5>
          <p className="font-normal text-[18px] mt-[10px]">
            {displayedText}
            {shouldTruncate && (
              <span
                onClick={(e) => {
                  e.stopPropagation(); 
                  toggleExpanded();
                }}
                className="text-blue-500 ml-1 underline text-[15px] cursor-pointer"
              >
                {expanded ? "Show Less" : "Show More"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
