import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../base";
import { PlayIcon } from "../../data/dummy";

const Item = ({ data }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.background})` }}
      className="h-screen sm:h-[900px] bg-cover bg-no-repeat bg-center relative before:absolute before:w-full before:top-0 before:left-0 before:h-full before:bg-[#2C2C2C] before:bg-opacity-60 flex items-center"
    >
      <div className="container text-white relative">
        <h3
          dangerouslySetInnerHTML={{ __html: data.title }}
          className="text-4xl tracking-[3px] leading-[62px] capitalize font-[400]"
        />
        <p
          dangerouslySetInnerHTML={{ __html: data.des }}
          className="text-base sm:text-md  text-[#D5D5D5] mb-4 sm:mb-6 mt-3"
        />

        <div className="flex flex-wrap gap-4">
          <Button
            type="solid"
            className="py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base tracking-[2px]"
          >
            Our Services
          </Button>
          <Button
            type="outline"
            className="py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base tracking-[2px] hover:bg-custom-gray duration-150 hover:border-custom-gray space-x-2"
          >
            <FontAwesomeIcon icon={PlayIcon} />
            <span>See How it Works</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;
