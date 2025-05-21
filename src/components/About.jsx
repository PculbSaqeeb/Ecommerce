import image_9 from "../assets/images/Rectangle 375.jpg";
import Button from "./Button";

const About = () => {
  return (
    // <div className="flex gap-[28px] mb-[78px]">
    //   <div className="ml-[50px]">
    //     <p className="text-[36px] text-textPrimary mt-[80px]">About Us</p>
    //     <p className="mt-[27px] text-4xl font-bold text-textPrimary">
    //       Business Name
    //     </p>
    //     <p className="mt-[26px] w-[882px] text-textPrimary text-[24px]">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
    //       cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
    //       tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
    //       eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
    //       Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
    //       sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
    //       sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
    //       ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
    //       Sapien et montes, duis tempor euismod augue cras eu eget. Risus
    //       suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
    //       amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
    //       molestie proin dictum gravida. Porttitor maecenas
    //     </p>
    //     <p className="text-[24px] font-bold mt-[26px] text-textPrimary">
    //       Contact Information
    //     </p>
    //     <p className="mt-[15px] text-textPrimary text-[24px]">+91 1234567890</p>
    //     <p className="mt-[12px] text-textPrimary text-[24px]">
    //       Somthing@gamil.com
    //     </p>

    //     <Button
    //       variant="outlineDark"
    //       className="w-[168px] text-[18px] mt-[26px]"
    //     >
    //       Directions
    //     </Button>
    //   </div>

    //   <div>
    //     <img
    //       className="w-[907px] h-[655px] object-cover mt-[152px] rounded-[10px]"
    //       src={image_9}
    //       alt=""
    //     />
    //   </div>
    // </div>
    <div className="flex flex-col lg:flex-row gap-[28px] mb-[78px] px-4 lg:px-8">
      {/* Text Section */}
      <div className="lg:mx-[50px] mx-3">
        <p className="text-[28px] sm:text-[32px] lg:text-[36px] text-textPrimary mt-[40px] lg:mt-[80px]">
          About Us
        </p>
        <p className="mt-[20px] sm:mt-[25px] text-2xl sm:text-3xl lg:text-4xl font-bold text-textPrimary">
          Business Name
        </p>
        <p className="mt-[20px] sm:mt-[24px] w-full lg:w-[882px] text-textPrimary text-[16px] sm:text-[20px] lg:text-[24px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
        </p>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold mt-[20px] lg:mt-[26px] text-textPrimary">
          Contact Information
        </p>
        <p className="mt-[10px] text-textPrimary text-[16px] sm:text-[20px] lg:text-[24px]">
          +91 1234567890
        </p>
        <p className="mt-[10px] text-textPrimary text-[16px] sm:text-[20px] lg:text-[24px]">
          Somthing@gamil.com
        </p>

        <Button
          variant="outlineDark"
          className="w-[140px] sm:w-[168px] text-[16px] sm:text-[18px] mt-[20px] lg:mt-[26px]"
        >
          Directions
        </Button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-auto sm:px-10">
        <img
          className="w-full h-auto lg:w-[907px] lg:h-[655px] object-cover mt-[40px] lg:mt-[152px] rounded-[10px]"
          src={image_9}
          alt="About us"
        />
      </div>
    </div>

  );
};

export default About;
