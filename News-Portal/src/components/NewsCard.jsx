// eslint-disable-next-line react/prop-types
const NewsCard = ({ image, title, date, category, id }) => {
  return (
    <>
      <div
        className={`flex flex-1 flex-col w-full max-sm:w-full 
        }`}
        id={id}
      >
        <img
          src={image}
          alt={title}
          className="w-[280px] h-[280px] transition duration-500 hover:opacity-90 mx-auto"
        />
        <div className="mt-8 flex justify-center gap-2.5">
          <img src={date} alt="rating" width={24} height={24} />
          <p className="text-xl font-montserrat leading-normal text-slate-gray">
            {category}
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center dark:text-gray-200">
          {title}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red text-center">
          {date}
        </p>
      </div>
    </>
  );
};

export default NewsCard;
