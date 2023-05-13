import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/dummy";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const { footer } = data;

const AboutBrand = () => (
  <div className="w-full md:w-4/12">
    <img src={footer.logo} alt="brand logo" className="mb-8 md:mb-10" />
    <p className="text-[#C7C7C7] text-sm font-light mb-3 leading-7">
      {footer.description}
    </p>
    <div className="space-x-2 md:space-x-4">
      {footer.social.map((item, index) => (
        <button
          key={index}
          className="text-[#C7C7C7] text-lg p-2 sm:w-10 sm:h-10 sm:p-0 rounded-full leading-[10px] md:leading-[41px] bg-[#565656] hover:bg-custom-gray hover:text-white duration-200"
        >
          <FontAwesomeIcon icon={item} />
        </button>
      ))}
    </div>
  </div>
);

const ListFooter = ({ data, title }) => (
  <div className="w-full md:w-2/12">
    <h3 className="text-lg font-normal capitalize mb-8 md:mb-10">{title}</h3>
    <ul>
      {data.map((item) => (
        <li
          key={item.caption}
          className="text-[#C7C7C7] text-sm leading-11 md:leading-[42px]"
        >
          {item?.path ? (
            <a href={item.path} className="hover:text-custom-gray duration-200">
              {item.caption}
            </a>
          ) : (
            item.caption
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-white">
      <div className="container px-5 sm:px-0 flex flex-col md:flex-row gap-5 pt-16 md:pt-28 pb-16 md:pb-40">
        <AboutBrand />
        <ListFooter data={footer.services} title={"Services"} />
        <ListFooter data={footer.usefulLinks} title={"Useful Links"} />
        <ListFooter data={footer.address} title={"Address"} />
      </div>
      <div className="bg-[#1F1F1F] py-[30px]">
        <div className="container text-center">
          Copyright ©{new Date().getFullYear()} All rights reserved | This
          template is made with by <FontAwesomeIcon icon={faHeart} />
          <a href={"/#"} className="text-custom-gray">
            {" "}
            Colorlib
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
