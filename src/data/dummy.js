import {
  faEnvelope,
  faPhone,
  faSearch,
  faChevronDown,
  faBars,
  faPlus,
  faMinus,
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Banner1 from "../assets/banner.png.webp";
import Banner2 from "../assets/banner2.png.webp";

import backgroundCard1 from "../assets/1.png.webp";
import backgroundCard2 from "../assets/2.png.webp";
import backgroundCard3 from "../assets/3.png.webp";

import LegalPaperIcon from "../assets/legal-paper.svg";
import CaseIcon from "../assets/case.svg";
import SurveyIcon from "../assets/survey.svg";

import aboutPoster from "../assets/about.png.webp";

import gridImage1 from "../assets/grid1.png.webp";
import gridImage2 from "../assets/grid2.png.webp";
import gridImage3 from "../assets/grid3.png.webp";
import gridImage4 from "../assets/grid4.png.webp";
import gridImage5 from "../assets/grid5.png.webp";

import PuzzleIcon from "../assets/puzzle.svg";
import BarChartIcon from "../assets/bar-chart.svg";
import ControlsIcon from "../assets/controls.svg";
import BackgroundProps from "../assets/about_bg.png.webp";

import UserImage from "../assets/user.png.webp";

import BackgroundBestSolution from "../assets/finance.png.webp";

import LogoImage from "../assets/logo.png.webp";

const navbarTop = {
  social: [
    {
      link: "#",
      icon: faLinkedinIn,
    },
    {
      link: "#",
      icon: faFacebookF,
    },
    {
      link: "#",
      icon: faGooglePlusG,
    },
  ],
  concat: [
    { icon: faEnvelope, text: "info@docmed.com" },
    {
      icon: faPhone,
      text: "1601-609 6780",
    },
  ],
};

const navigation = [
  {
    text: "Home",
    path: "/",
    sub: [],
  },
  {
    text: "About",
    path: "/about",
    sub: [],
  },
  {
    text: "Services",
    path: "/services",
    sub: [],
  },
  {
    text: "Blog",
    path: "/blog",
    sub: [
      { text: "Blog", path: "/blog" },
      { text: "Single-Blog", path: "/single-blog" },
    ],
  },
  {
    text: "Pages",
    path: "/pages",
    sub: [
      {
        text: "Elements",
        path: "elements",
      },
      {
        text: "Portfolio",
        path: "portfolio",
      },
      {
        text: "Portfolio Details",
        path: "portfolio-details",
      },
    ],
  },
  {
    text: "Contact",
    path: "/contact",
    sub: [],
  },
];

const heroSlider = [
  {
    title: " Grow Big with <br/> Musical Business",
    des: "Nam libero tempore, cum soluta nobis est eligendi optio <br/> cumque nihil impedit quo minus.",

    background: Banner2,
  },
  {
    title: " Grow Big with <br/> Musical Business",
    des: "Nam libero tempore, cum soluta nobis est eligendi optio <br/> cumque nihil impedit quo minus.",
    background: Banner2,
  },
  {
    title: " Grow Big with <br/> Musical Business",
    des: "Nam libero tempore, cum soluta nobis est eligendi optio <br/> cumque nihil impedit quo minus.",
    background: Banner1,
  },
];

const ExploreOurSolutionsCards = [
  {
    background: backgroundCard1,
    caption: {
      icon: LegalPaperIcon,
      text: "Invoicing",
    },
    des: "These cases are perfectly simple and easy to distinguish. In a free hour power.",
  },
  {
    background: backgroundCard2,
    caption: {
      icon: CaseIcon,
      text: "Business Growth",
    },
    des: "These cases are perfectly simple and easy to distinguish. In a free hour power.",
  },
  {
    background: backgroundCard3,
    caption: {
      icon: SurveyIcon,
      text: "Problem Solving",
    },
    des: "These cases are perfectly simple and easy to distinguish. In a free hour power.",
  },
];

const largestBusinessExpert = {
  img: aboutPoster,
  title: "The Largest Business Expert",
  description:
    "These cases are perfectly simple and easy to distinguish. In a free hour, <br/>when our power of choice is untrammelled and when nothing prevents <br/> our being able to do what we like best.",
  list: [
    "Apartments frequently or motionless.",
    "Duis aute irure dolor in reprehenderit in voluptate.",
    "Voluptatem quia voluptas sit aspernatur.",
  ],
};

const OurRecentWorks = {
  title: "Our Recent Works",
  des: "These cases are perfectly simple and easy to distinguish. In a free <br/>hour, when our power of choice is untrammelled.",
  gridImage: [
    { img: gridImage1, title: "Product Branding", subTitle: "Branding" },
    { img: gridImage2, title: "Product Branding", subTitle: "Branding" },
    { img: gridImage3, title: "Product Branding", subTitle: "Branding" },
    { img: gridImage4, title: "Product Branding", subTitle: "Branding" },
    { img: gridImage5, title: "Product Branding", subTitle: "Branding" },
  ],
};

const property = {
  background: BackgroundProps,
  properties: [
    {
      icon: ControlsIcon,
      title: "Unlimited Control",
      text: "These cases are perfectly simple and easy to",
    },
    {
      icon: BarChartIcon,
      title: "Rapidly Growth",
      text: "These cases are perfectly simple and easy to",
    },
    {
      icon: PuzzleIcon,
      title: "Problem Solving",
      text: "These cases are perfectly simple and easy to",
    },
  ],
};

const bestFinancialSolution = {
  background: BackgroundBestSolution,
  slides: [
    {
      img: "",
      title: "Gives you the best Financial <br>solution for business",
      text: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.",
    },
    {
      img: "",
      title: "Gives you the best Financial <br>solution for business",
      text: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.",
    },
  ],
};

const Comment = [
  {
    image: UserImage,
    comment:
      "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able.",
    name: "Robert Jonson",
    position: "Business Owner",
  },
  {
    image: UserImage,
    comment:
      "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able.",
    name: "Robert Jonson",
    position: "Business Owner",
  },
];

const doYouHaveProject = {
  title: "Do you Have any Project?",
  description:
    "Nam libero tempore, cum soluta nobis est eligendi optio <br>cumque nihil impedit quo minus.",
};

const footer = {
  logo: LogoImage,
  description:
    "Firmament morning sixth subdue darkness creeping gathered divide.",
  social: [faFacebookF, faTwitter, faInstagram],
  services: [
    { caption: "Design", path: "/#" },
    { caption: "Development", path: "/#" },
    { caption: "Marketing", path: "/#" },
    { caption: "Consulting", path: "/#" },
    { caption: "Finance", path: "/#" },
  ],
  usefulLinks: [
    { caption: "About", path: "/#" },
    { caption: "Blog", path: "/#" },
    { caption: "Contact", path: "/#" },
    { caption: "Free quote", path: "/#" },
  ],
  address: [
    {
      caption: "200, D-block, Green lane USA",
    },
    {
      caption: "+10 367 467 8934",
    },
    {
      caption: "docmed@contact.com",
      path: "/#",
    },
  ],
  copyright:
    "Copyright ©2023 All rights reserved | This template is made with  by Colorlib",
};

// data app
const data = {
  navbarTop,
  navigation,
  heroSlider,
  ExploreOurSolutionsCards,
  largestBusinessExpert,
  OurRecentWorks,
  property,
  bestFinancialSolution,
  Comment,
  doYouHaveProject,
  footer,
};

// icons
export const SearchIcon = faSearch;
export const ArrowDown = faChevronDown;
export const MenuIcon = faBars;
export const PlusIcon = faPlus;
export const MinusIcon = faMinus;
export const PlayIcon = faPlay;
export const AngleLeftIcon = faAngleLeft;
export const AngleRightIcon = faAngleRight;

export default data;
