import data from "../../data/dummy";
import { Button } from "../base";

const OurRecentWorks = () => {
  const { OurRecentWorks } = data;
  return (
    <section className="my-[150px]">
      <div className="container">
        <div className="text-center mb-16">
          <h3 className="container text-2xl lg:text-3xl text-gray-700 pb-4 lg:pb-15 mb-10 lg:mb-50 text-center">
            {OurRecentWorks.title}
          </h3>
          <p
            className="text-base sm:text-lg leading-7 sm:leading-8 md:leading-9 lg:leading-10 text-[#727272] font-[400]"
            dangerouslySetInnerHTML={{ __html: OurRecentWorks.des }}
          />
        </div>
        <div className="grid grid-cols-12 gap-5 sm:gap-4 md:gap-6 lg:gap-8">
          {OurRecentWorks.gridImage.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden ${
                index === 3
                  ? "col-span-12 lg:col-span-8 md:col-span-12 sm:col-span-8 order-last sm:order-[4]"
                  : "col-span-6 lg:col-span-4 md:col-span-6 sm:col-span-4"
              }`}
            >
              <img
                src={item.img}
                alt="poster brand"
                className={`block w-full h-auto lg:h-full`}
              />
              <div className="w-full text-white h-full absolute bg-custom-gray bg-opacity-50 left-0 top-0 text-center flex flex-col justify-center items-center opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 translate-x-[-50%] duration-200">
                <h3 className="text-lg lg:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-lg font-light">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            className={
              "border-custom-gray text-custom-gray p-[14px_31px] tracking-[2px] hover:bg-custom-gray hover:text-white duration-150"
            }
            type={"outline"}
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurRecentWorks;
