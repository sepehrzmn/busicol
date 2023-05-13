import data from "../../data/dummy";
import { Button } from "../base";

const DoYouHaveProject = () => {
  const { doYouHaveProject } = data;
  return (
    <section className="bg-custom-gray py-[150px] text-center text-white">
      <h3 className=" text-xl sm:text-[36px] leading-[55px] font-[400]">
        {doYouHaveProject.title}
      </h3>
      <p
        className="text-sm sm:text-base text-[16px] font-[300] leading-[28px] mt-[8px] mb-[26px]"
        dangerouslySetInnerHTML={{ __html: doYouHaveProject.description }}
      />

      <Button
        type={"outline"}
        className={
          "p-[13px_27px] text-[14px] hover:bg-white hover:text-custom-gray duration-150 tracking-[2px]"
        }
      >
        Contact Us
      </Button>
    </section>
  );
};

export default DoYouHaveProject;
