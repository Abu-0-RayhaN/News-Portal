// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, date, category, id }) => {
  return (
    <>
      <div
        className={`flex flex-1 flex-col w-full max-sm:w-full relative overflow-hidden`}
        id={id}
      >
        <div
          className="h-[280px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <div>
            <p className="text-xl font-montserrat leading-normal text-slate-gray">
              {category}
            </p>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center dark:text-gray-200">
              {title}
            </h3>
          </div>
          <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red text-center">
            {date}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
