// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, date, category, id }) => {
  return (
    <div
      className="relative overflow-hidden w-full md:w-1/2 lg:w-1/3 hover:shadow-2xl border-transparent hover:border-gray-600 border-r-4 border-b-4 cursor-pointer"
      id={id}
    >
      <div
        className="h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <div>
            <p className="text-xl font-montserrat leading-normal text-slate-gray">
              {category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold font-palanquin text-center dark:text-gray-200">
              {title}
            </h3>
          </div>
          <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red text-center">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
