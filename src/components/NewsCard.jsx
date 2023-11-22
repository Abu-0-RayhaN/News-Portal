// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, date, category, id, description = "" }) => {
  const truncatedDescription =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");
  return (
    <div
      className="relative overflow-hidden w-full md:w-1/2 lg:w-1/3 hover:shadow-2xl border-transparent hover:border-gray-600 border-r-4 border-b-4 cursor-pointer"
      id={id}
    >
      <div
        className="h-[280px] bg-cover bg-center "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="absolute inset-0 flex flex-col justify-between p-4 text-white "
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div>
            <p className="text-xl font-manrope leading-normal text-color-red text-right -mt-3">
              {category}
            </p>
            <h3 className="mt-10 text-2xl font-semibold font-kanit text-center text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-300 leading-normal">
              {truncatedDescription}
            </p>
          </div>
          <p className=" font-workSans text-xl leading-normal text-coral-red text-left">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
