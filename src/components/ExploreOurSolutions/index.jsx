import data from "../../data/dummy";
import CardByImage from "../card/CardByImage";

const ExploreOurSolutions = () => {
  return (
    <section className="py-10 px-4 lg:py-24 lg:px-6">
      <div className="container text-2xl lg:text-3xl text-gray-700 pb-4 lg:pb-15 mb-10 lg:mb-50 text-center">
        <h3>Explore Our Solutions</h3>
      </div>
      <div className=" container flex flex-col lg:flex-row">
        {data.ExploreOurSolutionsCards.map((data, index) => (
          <CardByImage
            data={data}
            key={index}
            className="mb-4 lg:mb-0 lg:mr-4 "
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreOurSolutions;
