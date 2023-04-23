import React from "react";

const CardInfo = ({ heading, name }) => {

  return (
    <>
      <div className=" border-b border-stone-400">
        <h3 className=" font-extralight text-stone-400">
          {heading}
        </h3>
      </div>
      <div>
        <p className=" font-bold text-lg text-primary-heading whitespace-nowrap">{name}</p>
      </div>
    </>
  );
};

export default CardInfo;