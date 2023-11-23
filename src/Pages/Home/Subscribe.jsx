const Subscribe = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-5 bg-gradient-to-t from-green-400 to-green-500 py-20 rounded-2xl mb-20">
        <p className="text-5xl font-kdam font-extrabold  pt-3 mx-3 leading-relaxed md:leading-normal">
          <span className="block md:inline-block">Sign Up</span> for our{" "}
          <span className="block md:inline-block">NewsLetter</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5  rounded-ful ">
          <input
            type="text"
            placeholder="subscribe@mail.com"
            className=" bg-gray-300 dark:bg-gray-100 h-16 p-5 px-10 rounded-lg focus:outline-none  text-gray-950"
          />
          <div className="">
            <button className="p-3 px-10 rounded-full bg-red-500 bg-gradient-to-r from-red-300 via-red-500 to-red-600 hover:from-red-600 hover:via-red-500 hover:to-red-300 text-gray-950 dark:text-slate-800 font-kdam">
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
