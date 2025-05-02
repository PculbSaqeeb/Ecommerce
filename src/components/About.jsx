import React from "react";
import image_9 from "../assets/images/Rectangle 375.jpg";
import Button from "./Button";

const About = () => {
  return (
    <div className="flex gap-[28px] mb-[78px]">
      <div className="ml-[50px]">
        <p className="text-[36px] text-textPrimary mt-[80px]">About Us</p>
        <p className="mt-[27px] text-4xl font-bold text-textPrimary">
          Business Name
        </p>
        <p className="mt-[26px] w-[882px] text-textPrimary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
          cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
          tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
          eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
          Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
          sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
          ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
          Sapien et montes, duis tempor euismod augue cras eu eget. Risus
          suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
          molestie proin dictum gravida. Porttitor maecenas
        </p>
        <p className="text-[24px] font-bold mt-[26px] text-textPrimary">
          Contact Information
        </p>
        <p className="mt-[15px] text-textPrimary">+91 1234567890</p>
        <p className="mt-[12px] text-textPrimary text-[24px]">
          Somtinh@gamil.com
        </p>

        {/* <button className='rounded-[10px] text-[18px] text-textPrimary w-[168px] h-[48px] border-2 border-textPrimary mt-[26px]'>Directions</button> */}

        <Button
          variant="outlineDark"
          className="w-[168px] text-[18px] mt-[26px]"
        >
          Directions
        </Button>
      </div>

      <div>
        <img
          className="w-[907px] h-[655px] object-cover mt-[152px] rounded-[10px]"
          src={image_9}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
