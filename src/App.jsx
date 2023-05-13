import {
  Navbar,
  HeroSlider,
  ExploreOurSolutions,
  LargestBusinessExpert,
  CountUp,
  OurRecentWorks,
  Property,
  BestFinancialSolution,
  Comment,
  Footer,
  DoYouHaveProject,
} from "./components";

// Import Swiper styles
import "swiper/css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ExploreOurSolutions />
      <LargestBusinessExpert />
      <CountUp />
      <OurRecentWorks />
      <Property />
      <BestFinancialSolution />
      <Comment />
      <DoYouHaveProject />
      <Footer />
    </>
  );
}

export default App;
