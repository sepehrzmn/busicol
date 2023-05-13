const TwoPartLayoutByImage = ({
  img,
  children,
  container,
  reverse,
  className,
}) => {
  return (
    <section
      className={`my-10 xl:my-0 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${container ? "container" : ""} ${className ? className : ""}`}
    >
      <img src={img} alt="poster" className="w-full  lg:w-1/2" />
      <div className="w-full lg:w-1/2 mt-5 pl-4 lg:pl-0">{children}</div>
    </section>
  );
};

export default TwoPartLayoutByImage;
