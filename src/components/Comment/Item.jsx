const Item = ({ data }) => {
  return (
    <div className="text-center mt-20 sm:mt-32">
      <p className="text-base sm:text-[20px] leading-[32px] text-[#727272] underline mb-[24px]">
        {data.comment}
      </p>
      <div>
        <h4 className="text-sm sm:text-[16px] font-[#2C2C2C] uppercase ">
          {data.name}
        </h4>
        <span className="text-[#727272] text-sm">{data.position}</span>
      </div>
    </div>
  );
};

export default Item;
