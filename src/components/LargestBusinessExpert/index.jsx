import { TwoPartLayoutByImage } from "../";
import data from "../../data/dummy";
import { Button } from "../base";

const LargestBusinessExpert = () => {
  const { largestBusinessExpert } = data;
  return (
    <TwoPartLayoutByImage img={largestBusinessExpert.img}>
      <div className="pl-[30px] flex items-center h-full ">
        <div>
          <h3 className="text-3xl lg:text-4xl leading-10 lg:leading-14 text-gray-700 mb-2 lg:mb-5">
            {largestBusinessExpert.title}
          </h3>
          <p
            className="text-sm lg:text-md text-gray-600 leading-7 mb-5"
            dangerouslySetInnerHTML={{
              __html: largestBusinessExpert.description,
            }}
          ></p>
          <ul className="list-image-[url(https://preview.colorlib.com/theme/busicol/img/svg_icon/check.svg)] pl-5 mb-6">
            {largestBusinessExpert.list.map((item, index) => (
              <li
                className="text-[16px] leading-[28px] text-gray-600 pl-[8px] mb-[5px]"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <Button
            className={"p-[13px_46px_14px_46px]  tracking-[2px]"}
            type={"solid"}
          >
            About Us
          </Button>
        </div>
      </div>
    </TwoPartLayoutByImage>
  );
};

export default LargestBusinessExpert;
