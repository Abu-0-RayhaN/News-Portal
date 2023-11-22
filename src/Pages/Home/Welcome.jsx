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
    <div className="flex justify-between mb-10">
      <p className="text-3xl font-kdam font-extrabold  dark:text-gray-300 ">
        Welcome to News24.com
      </p>
      <p className="text-gray-900 dark:text-gray-200 font-kdam">
        {formattedDate}
      </p>
    </div>
  );
};

export default Welcome;
