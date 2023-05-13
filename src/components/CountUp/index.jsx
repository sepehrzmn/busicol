import LCountUp from "react-countup";
const CountUp = () => {
  return (
    <section className="bg-[#F5FBFF] pt-10 lg:pt-20 pb-10 lg:pb-20">
      <div className="container flex justify-center items-center gap-6 lg:gap-0 flex-col lg:flex-row text-center">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-4xl lg:text-5xl  text-[#2C2C2C]">
            <LCountUp start={0} end={520} duration={10} suffix="+" />
          </h3>
          <span className="text-sm lg:text-base block mt-4 text-[#919191]">
            Total Projects
          </span>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-4xl lg:text-5xl  text-[#2C2C2C]">
            <LCountUp start={0} end={244} duration={10} />
          </h3>
          <span className="text-sm lg:text-base block mt-4 text-[#919191]">
            On Going Projects
          </span>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-4xl lg:text-5xl text-[#2C2C2C]">
            <LCountUp start={0} end={95} duration={10} suffix="%" />
          </h3>
          <span className="text-sm lg:text-base block mt-4 text-[#919191]">
            Job Success
          </span>
        </div>
      </div>
    </section>
  );
};

export default CountUp;
