import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../data/dummy";
import Item from "./Item";
import { useState } from "react";

const ButtonSlide = ({ img, index, activeSwiper, setActiveIndex }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`w-14 h-14 sm:w-16 sm:h-16 duration-200 relative before:absolute before:left-0 before:top-0 before:rounded-full before:w-full before:h-full  before:bg-white before:bg-opacity-60 before:duration-200 ${
        activeSwiper === index
          ? "w-16 h-16 sm:w-20 sm:h-20 before:opacity-0 before:invisible"
          : ""
      }`}
      onClick={() => {
        swiper.slideTo(index);
        setActiveIndex(index);
      }}
    >
      <img src={img} alt="poster user" />
    </button>
  );
};

const Comment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container py-28 sm:py-32 lg:pt-40">
      <Swiper>
        <div className="flex justify-center items-center absolute z-10 top-0 w-full gap-2">
          {data.Comment.map((item, index) => (
            <ButtonSlide
              img={item.image}
              index={index}
              activeSwiper={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
        {data.Comment.map((comment, index) => (
          <SwiperSlide key={index}>
            <Item data={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Comment;
