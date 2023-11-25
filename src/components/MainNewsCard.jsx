import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, date, category, id, description = "" }) => {
  const truncatedDescription =
    description.slice(0, 80) + (description.length > 80 ? "..." : "");
  return (
    <Link
      className="h-[450px] w-full md:w-1/2 lg:w-1/3 hover:shadow-xl cursor-pointer rounded-lg"
      to={`/post/${title}/${id}`}
    >
      <div className="relative overflow-hidden" id={id}>
        <div
          className="h-[280px] bg-cover bg-center "
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white ">
          <div>
            <p className="text-xl font-manrope leading-normal text-color-red text-right -mt-3">
              {category}
            </p>
          </div>
          <p className=" font-workSans text-xl leading-normal text-coral-red text-left">
            {date}
          </p>
        </div>
      </div>
      <div className="mx-5 mt-3">
        <h3 className="text-2xl font-semibold font-kanit text-center text-black dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-black dark:text-gray-300 leading-normal">
          {truncatedDescription}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
