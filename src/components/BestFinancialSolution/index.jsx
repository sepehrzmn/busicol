import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { TwoPartLayoutByImage } from "../";
import data, { AngleLeftIcon, AngleRightIcon } from "../../data/dummy";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="text-custom-gray border border-custom-gray rounded-full p-2 w-[40px] h-[40px] hover:bg-custom-gray hover:text-white duration-150"
      onClick={() => swiper.slideNext()}
    >
      <FontAwesomeIcon icon={AngleRightIcon} />
    </button>
  );
};
const PrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="text-custom-gray border border-custom-gray rounded-full p-2 w-[40px] h-[40px] hover:bg-custom-gray hover:text-white duration-150"
      onClick={() => swiper.slidePrev()}
    >
      <FontAwesomeIcon icon={AngleLeftIcon} size="1x" fontWeight={"100"} />
    </button>
  );
};

const BestFinancialSolution = () => {
  const { bestFinancialSolution } = data;
  return (
    <TwoPartLayoutByImage
      container={true}
      reverse={true}
      img={bestFinancialSolution.background}
      className={"pt-[150px]"}
    >
      <div className="h-full">
        <Swiper loop slidesPerView={1} spaceBetween={0} className="h-full">
          {bestFinancialSolution.slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Item data={item} />
              </SwiperSlide>
            );
          })}
          <div className="space-x-2 z-30 absolute bottom-0 left-0 container w-full hidden lg:block">
            <PrevButton />
            <NextButton />
          </div>
        </Swiper>
      </div>
    </TwoPartLayoutByImage>
  );
};

export default BestFinancialSolution;
