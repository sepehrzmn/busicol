import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data, { AngleLeftIcon, AngleRightIcon } from "../../data/dummy";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className="text-white border border-[#787878] rounded-full p-2 w-[50px] h-[50px] hover:bg-custom-gray hover:border-custom-gray duration-150"
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
      className="text-white border border-[#787878] rounded-full p-2 w-[50px] h-[50px] hover:bg-custom-gray hover:border-custom-gray duration-150"
      onClick={() => swiper.slidePrev()}
    >
      <FontAwesomeIcon icon={AngleLeftIcon} size="1x" fontWeight={"100"} />
    </button>
  );
};

const HeroSlider = () => {
  return (
    <div className="">
      <Swiper slidesPerView={1} loop>
        {data.heroSlider.map((data, index) => (
          <SwiperSlide key={index}>
            <Item data={data} />
          </SwiperSlide>
        ))}
        <div className="absolute top-[50%] w-full hidden lg:flex left-0 z-10 justify-between px-36 font-[16px]">
          <PrevButton />
          <NextButton />
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
