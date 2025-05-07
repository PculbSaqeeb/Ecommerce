import React from "react";
import "../style/style.css";

const Scroll = () => {
  return (
    <div className="flex gap-10 overflow-x-scroll scrollbar-hide">
      {[1, 2, 3, 4, 5, 6, 7].map(() => (
        <div className="w-[300px] h-[400px] bg-slate-100 flex-shrink-0"></div>
      ))}
    </div>
  );
};

export default Scroll;

"code": "SAVE80";
"description": "Save 10% on your order";
"discountType": "percentage";
"discountValue": 10;
"maxDiscountValue": 50;
"minOrderAmount": 100;
"perUserLimit": 1;
"usageLimit": 500;
"usedCount": 120;
"isActive": true;
"isPublic": true;
"appliesToProductIds": Array;
"appliesToCategoryIds": Array;
