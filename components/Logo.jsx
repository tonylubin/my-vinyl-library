import Image from "next/image";
import React from "react";
import Heading from './Heading';

const Logo = () => {
  return (
    <div className="flex items-center gap-4 pt-6 px-4 bg-black">
      <div className="w-8 h-8 relative">
        <Image
          src={"/../public/images/sound-mixer.png"}
          alt="heading icon"
          className=" aspect-square"
          fill
        />
      </div>
      <Heading
        styles={
          " text-3xl font-extrabold font-bioRhyme py-5 text-primary-heading"
        }
      />
    </div>
  );
};

export default Logo;

// text gradient multicolor
// text-transparent bg-clip-text bg-gradient-to-r from-text-blue to-text-red ...