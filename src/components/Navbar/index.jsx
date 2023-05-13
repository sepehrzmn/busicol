import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoWeb from "../../assets/logo.png.webp";
import data, {
  SearchIcon,
  ArrowDown,
  MenuIcon,
  PlusIcon,
  MinusIcon,
} from "../../data/dummy";
import { Button } from "../base";

// section top header
const HeaderTop = () => {
  return (
    <div className="container flex py-[12px]">
      {/* social network */}
      <div className="w-1/2">
        <nav className="space-x-[12px]">
          {data.navbarTop.social.map(({ icon, link }, index) => (
            <Fragment key={index}>
              <a href={link} className="hover:text-custom-gray duration-300">
                <FontAwesomeIcon icon={icon} />
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
      {/* end social network */}
      {/* concat */}
      <div className="flex w-1/2">
        <ul className="flex w-full space-x-[50px] justify-end text-[13px]">
          {data.navbarTop.concat.map(({ icon, text }, index) => (
            <li key={index}>
              <a href="/#">
                <FontAwesomeIcon
                  icon={icon}
                  className="mr-[7px] text-custom-gray"
                  size="sm"
                />
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* end concat */}
    </div>
  );
};

// section navigation for desktop
const Navigation = () => {
  return (
    <div className="container pt-[18px] grid w-[90%] lg:w-full  grid-cols-3 lg:grid-cols-12 items-center">
      {/* logo brand */}
      <div className="xl:col-span-3 lg:col-span-2">
        <img src={LogoWeb} alt="logo" />
      </div>
      {/* end logo brand */}
      {/* navigator */}
      <nav className="lg:col-span-7 xl:col-span-6 hidden lg:block">
        <ul className="flex w-full text-center space-x-7 justify-center ">
          {data.navigation.map((item) => (
            <li
              key={item.path}
              className="text-[15px] flex items-center cursor-pointer space-x-1 relative group"
            >
              <a href={item.path}>{item.text}</a>
              {item.sub.length ? (
                <>
                  <FontAwesomeIcon
                    icon={ArrowDown}
                    className="font-thin text-[9px]"
                  />
                  <ul className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 absolute top-[130%] min-w-[200px] bg-white text-black text-start shadow-[0_0_10px_rgba(0,_0,_0,_0.02)] px-4 left-0 text-[15px] w-max">
                    {item.sub.map((subItem) => (
                      <li key={subItem.path} className="py-2">
                        <a href={subItem.path}>{subItem.text}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* end navigator */}
      {/* right navigation */}
      <div className="xl:col-span-3 lg:col-span-3 hidden lg:block text-end space-x-10">
        <FontAwesomeIcon icon={SearchIcon} />
        <Button type={"solid"} className={"p-[12px_26px]"}>
          Get a Quote
        </Button>
      </div>
      {/* end right navigation */}
    </div>
  );
};
// section navigation for mobile
const SubMenuMobile = ({ item, defaultClassName }) => {
  const [subShow, setSubShow] = useState(false);

  return (
    <li
      key={item.path}
      className="cursor-pointer"
      onClick={() => setSubShow(!subShow)}
    >
      <div
        className={`flex items-center space-x-1 w-full hover:bg-[#ccc] hover:text-black duration-150 py-2 px-2 rounded-md`}
      >
        <a
          href={item.path}
          onClick={(e) => item.sub.length && e.preventDefault()}
          className={subShow ? "text-black" : ""}
        >
          {item.text}
        </a>
        {item.sub.length ? (
          <>
            <FontAwesomeIcon
              icon={ArrowDown}
              className="font-thin text-[9px]"
            />
            <FontAwesomeIcon
              icon={subShow ? MinusIcon : PlusIcon}
              className="font-thin text-[9px]"
            />
          </>
        ) : (
          ""
        )}
      </div>
      {item.sub.length ? (
        <>
          <ul
            className={`text-start px-4 text-[15px] w-full  ${defaultClassName} ${
              subShow ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.sub.map((subItem) => (
              <li
                key={subItem.path}
                className="hover:bg-[#ccc] py-2 px-2 rounded-md w-full hover:text-black"
              >
                <a href={subItem.path}>{subItem.text}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </li>
  );
};
const MobileNavigation = () => {
  const [show, setShow] = useState(false);

  const defaultClassName =
    "w-full pt-0 overflow-hidden transition-[max-height] duration-300 text-[0.875em] ";
  return (
    <div className="block  lg:hidden container bg-[#4c4c4c] text-end py-1">
      <button
        className="bg-black py-2 space-x-1 px-2 rounded-md font-bold"
        onClick={() => setShow(!show)}
      >
        <span>MENU</span>
        <FontAwesomeIcon icon={MenuIcon} />
      </button>
      <ul
        className={`${defaultClassName} mt-2 ${
          show ? "max-h-screen" : "max-h-0"
        }`}
      >
        {data.navigation.map((item) => (
          <SubMenuMobile defaultClassName={defaultClassName} item={item} />
        ))}
      </ul>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header className={`text-white top-0 w-full left-0 z-[99999] absolute `}>
      <div className="bg-[rgba(44,_44,_44,_0.5)] hidden lg:block">
        <HeaderTop />
      </div>
      <div
        className={`lg:w-full mx-auto top-0 border-b border-b-[#4B4E50] w-full pb-[22px] ${
          isSticky ? "fixed sticky-nav lg:border-none" : ""
        }`}
      >
        <div className={isSticky ? "bg-[#2C2C2C] pb-5 z-40 mx-auto" : "pb-5"}>
          <Navigation />
        </div>
        <div className="w-[90%] mx-auto -m-3 ">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
