import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCard = ({
  // eslint-disable-next-line react/prop-types
  image,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  date,
  // eslint-disable-next-line react/prop-types
  category,
  // eslint-disable-next-line react/prop-types
  id,
  // eslint-disable-next-line react/prop-types
  description = "",
  // eslint-disable-next-line react/prop-types
  width,
}) => {
  const truncatedDescription =
    description.slice(0, 100) + (description.length > 100 ? "..." : "");
  return (
    <Link to={`/post/${title}/${id}`}>
      <div
        className={`relative overflow-hidden hover:shadow-2xl border-transparent border-r-4 border-b-4 cursor-pointer `}
        id={id}
      >
        <div
          className={` bg-cover bg-center ${width}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="absolute inset-0 flex flex-col justify-between p-4 text-white hover:text-gray-200"
          style={{ backdropFilter: "brightness(80%)" }}
        >
          <div className="">
            <p className="text-xl font-manrope leading-normal text-color-red text-right -mt-3 ">
              {category}
            </p>
            <h3 className="mt-[10%] text-2xl font-semibold font-kanit text-center text-">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white leading-normal hidden">
              {truncatedDescription}
            </p>
          </div>
          <p className=" font-workSans text-xl leading-normal text-coral-red text-left">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
