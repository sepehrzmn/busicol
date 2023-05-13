import data from "../../data/dummy";

const Property = () => {
  const { property } = data;
  return (
    <section
      className="bg-cover bg-no-repeat bg-center pt-[145px] pb-[115px] relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-[#2C2C2C] before:bg-opacity-60"
      style={{ backgroundImage: `url(${property.background})` }}
    >
      <div className="flex flex-wrap xl:flex-nowrap container justify-center items-center gap-10 relative">
        {property.properties.map(({ icon, text, title }, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-center items-center text-white border p-[60px_63px] hover:bg-custom-gray hover:border-custom-gray duration-500 w-full sm:w-1/2 md:w-2/5 lg:w-1/3 rounded-sm transform hover:scale-105"
          >
            <img src={icon} alt={title} className="align-middle" />
            <h3 className="text-[20px] mb-[20px] mt-[38px] whitespace-nowrap">
              {title}
            </h3>
            <p className="text-[16px] leading-[28px] text-[#D5D5D5] mb-0">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Property;
