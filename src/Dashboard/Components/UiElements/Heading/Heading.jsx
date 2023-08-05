const Heading = ({ type, title, children }) => {
  return (
    <div className="py-4 ">
      <div className="flex justify-between items-center">
        <div className="">
          {type === "navigate" ? "" : ""}
          <h1 className="text-secondary text-xl font-semibold">
            {title || "no data"}
          </h1>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Heading;
