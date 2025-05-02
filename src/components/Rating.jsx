import React from 'react'
import image_11 from "../assets/images/Rectangle 375.jpg";
import black_star_icon from '../assets/icons/black_star_icon.svg';
import yellow_star_icon from '../assets/icons/yellow_star_icon.svg'

const Rating = () => {
  return (
    <div>
        <div>
            <p className="mt-[27px] text-[24px] font-bold text-textPrimary">
              Ratings
            </p>
            <div className="flex items-center gap-[8px] mt-[29px]">
              <p className="text-[48px] text-textPrimary">4.4</p>
              {[1, 2, 3, 4, 5].map(() => (
                <img src={black_star_icon} size={30} className="ml-[2px]" />
              ))}
            </div>
            <p className="mt-[28px] text-[18px]">40 Verfied buyer</p>

            <div className="w-[985px]">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(() => (
                  <img src={yellow_star_icon} size={25} className="" />
                ))}
                <p className="text-[18px] ml-[12px]">4.4</p>
              </div>
              <p className="text-[18px] text-textPrimary mt-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                tristique in tellus diam, metus sit. Quis venenatis, neque arcu
                accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean
                tristique felis.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. neque arcu accumsan sollicitudin{" "}
                <button className="text-linkPrimary text-[18px]">
                  Read more
                </button>
              </p>

              <div className="flex gap-[15px] mt-[16px] ">
                <img
                  className="w-[140px] h-[140px] rounded-[10px]"
                  src={image_11}
                  alt=""
                />
                <img
                  className="w-[140px] h-[140px] rounded-[10px]"
                  src={image_11}
                  alt=""
                />
                <div className="relative bg-black rounded-[10px]">
                  <img
                    className="w-[140px] h-[140px] rounded-[10px] opacity-50"
                    src={image_11}
                    alt=""
                  />
                  <p className="text-[48px] text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">+3</p>
                </div>
              </div>
              <p className="text-[18px] text-textPrimary mt-[15px]">
                Anna Cloe <span className="text-textSecondary ml-[6px]">|</span>{" "}
                28 September
              </p>
            </div>
            <button className='text-[24px] mt-[51px] text-linkPrimary font'>View all Reviews</button>
          </div>
    </div>
  )
}

export default Rating