const Welcome = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="flex justify-between mb-10">
        <p className="text-md sm:text-lg md:text-xl lg:text-3xl font-kdam font-extrabold  dark:text-gray-300 ">
          Welcome to News24.com
        </p>
        <p className="text-gray-900 dark:text-gray-200 font-kdam text-sm md:text-lg">
          {formattedDate}
        </p>
      </div>
      <div
        className="dark:bg-white bg-black dark:text-white mb-5"
        style={{
          clipPath:
            "polygon(31% 51%, 59% 23%, 100% 50%, 51% 67%, 25% 100%, 0% 50%)",
        }}
      >
        sasf<br></br>asfd
      </div>
    </>
  );
};
export default Welcome;
