import React from "react";

const Specifications = ({ specification }) => {
  const mid = Math.ceil(specification?.length / 2);
  const leftSpecs = specification?.slice(0, mid);
  const rightSpecs = specification?.slice(mid);

  return (
    // <div>
    //   <p className="mt-[27px] text-[24px] font-bold text-textPrimary">
    //   </p>
    //   <div className="flex gap-[98px]">
    //     <ul>
    //       {leftSpecs?.map((spec, index) => {
    //         return (
    //           <div key={index}>
    //             <li className="mt-[12px] text-textSecondary text-[18px]">
    //               {spec?.name}
    //             </li>
    //             <li className="w-[200px] text-[18px] text-textPrimary border-b border-textSecondary mt-[10px] pb-[12px]">
    //               {spec?.value}
    //             </li>
    //           </div>
    //         )
    //       })}
    //     </ul>

    //     <ul>
    //       {rightSpecs?.map((spec, index) => {
    //         return (
    //           <div key={index}>
    //             <li className="mt-[12px] text-textSecondary text-[18px]">
    //               {spec?.name}
    //             </li>
    //             <li className="w-[200px] text-[18px] text-textPrimary border-b border-textSecondary mt-[10px] pb-[12px]">
    //               {spec?.value}
    //             </li>
    //           </div>
    //         )
    //       })}
    //     </ul>
    //   </div>
    // </div>

    <div>
  <p className="hidden md:block mt-[27px] text-[24px] font-bold text-textPrimary dark:text-white">
    Specification
  </p>

  { specification.length>0 ?<div className="flex flex-col sm:flex-row sm:gap-[98px]">
    <ul>
      {leftSpecs?.map((spec, index) => (
        <div key={index}>
          <li className="mt-[12px] text-textSecondary dark:text-white text-[18px]">
            {spec?.name}
          </li>
          <li className="w-full sm:w-[200px] text-[18px] text-textPrimary dark:text-white border-b border-textSecondary mt-[10px] pb-[12px]">
            {spec?.value}
          </li>
        </div>
      ))}
    </ul>

    <ul className="mt-6 sm:mt-0">
      {rightSpecs?.map((spec, index) => (
        <div key={index}>
          <li className="mt-[12px] text-textSecondary dark:text-white text-[18px]">
            {spec?.name}
          </li>
          <li className="w-full sm:w-[200px] text-[18px] text-textPrimary dark:text-white  border-b border-textSecondary mt-[10px] pb-[12px]">
            {spec?.value}
          </li>
        </div>
      ))}
    </ul>
  </div> : <p className="mt-[20px] text-[24px]">N/A</p>}
</div>

  );
};

export default Specifications;
