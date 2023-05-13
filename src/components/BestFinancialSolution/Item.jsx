const Item = ({ data }) => {
  return (
    <div className="mt-20 h-full px-5">
      <h3
        dangerouslySetInnerHTML={{ __html: data.title }}
        className="text-2xl leading-10 sm:text-[36px] sm:leading-[55px] font-[400] text-[#2C2C2C] mb-[20px]"
      />
      <p className="text-sm sm:text-[16px] text-[#727272] font-[300] leading-[28px] mb-[13px]">
        {data.text}
      </p>
    </div>
  );
};

export default Item;
