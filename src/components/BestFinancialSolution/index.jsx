import { Swiper, SwiperSlide } from "swiper/react";
import { TwoPartLayoutByImage } from "../";
import data from "../../data/dummy";
import Item from "./Item";

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
        </Swiper>
      </div>
    </TwoPartLayoutByImage>
  );
};

export default BestFinancialSolution;
