import React from "react";
import { CgLaptop } from "react-icons/cg";

const Specifications = ({ specification }) => {
  const mid = Math.ceil(specification?.length / 2);
  const leftSpecs = specification?.slice(0, mid);
  const rightSpecs = specification?.slice(mid);

  return (
    <div>
      <p className="mt-[27px] text-[24px] font-bold text-textPrimary">
        Specifications
      </p>
      <div className="flex gap-[98px]">
        <ul>
          {leftSpecs?.map((spec, index) => {
            return (
              <div key={index}>
                <li className="mt-[12px] text-textSecondary text-[18px]">
                  {spec?.name}
                </li>
                <li className="w-[200px] text-[18px] text-textPrimary border-b border-textSecondary mt-[10px] pb-[12px]">
                  {spec?.value}
                </li>
              </div>
            )
          })}
        </ul>

        <ul>
          {rightSpecs?.map((spec, index) => {
            return (
              <div key={index}>
                <li className="mt-[12px] text-textSecondary text-[18px]">
                  {spec?.name}
                </li>
                <li className="w-[200px] text-[18px] text-textPrimary border-b border-textSecondary mt-[10px] pb-[12px]">
                  {spec?.value}
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
