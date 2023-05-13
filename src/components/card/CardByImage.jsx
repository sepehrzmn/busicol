import React from "react";

const CardByImage = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.background})`,
      }}
      className="bg-cover bg-no-repeat bg-center w-full lg:w-1/3 m-2 relative group overflow-hidden"
    >
      <div className="p-6 lg:p-8 bg-[rgba(0,_0,_0,_0.3)] text-white flex flex-col items-center justify-center gap-5 min-w-full min-h-[300px] max-w-[40px]">
        <img src={data.caption.icon} alt={data.caption.text} />
        <h3 className="">{data.caption.text}</h3>
      </div>
      <div className="absolute w-full h-full top-0 left-0 text-center flex justify-center items-center flex-col text-white bg-custom-gray opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300  translate-y-1/2 group-hover:translate-y-0">
        <h4 className="font-light mb-2 leading-tight text-lg lg:text-2xl ">
          {data.caption.text}
        </h4>
        <p className="align-middle text-sm font-light leading-7 w-3/4">
          {data.des}
        </p>
      </div>
    </div>
  );
};

export default CardByImage;
