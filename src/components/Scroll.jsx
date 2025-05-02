import React from "react";
import '../style/style.css'

const Scroll = () => {
  return (
    // <div className="flex gap-10  overflow-x-scroll scrollbar-hide">
    //   {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
    //     <div className="w-[410px] h-[423px] bg-slate-50 flex-shrink-0"></div>
    //   ))}
    // </div>
    <div className="flex gap-10 overflow-x-scroll scrollbar-hide">
      {
        [1,2,3,4,5,6,7].map(()=><div className="w-[300px] h-[400px] bg-slate-100 flex-shrink-0">
        </div>)
      }
    </div>
  );
};

export default Scroll;
