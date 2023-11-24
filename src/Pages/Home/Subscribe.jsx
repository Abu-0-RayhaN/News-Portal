const Subscribe = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center gap-5 bg-black bg-gradient-to-r from-[rgb(254, 202, 202)] to-[rgb(220, 38, 38)] py-20 rounded-2xl mb-20 ">
        <p className="text-5xl font-kdam font-extrabold  pt-3 mx-3 leading-relaxed md:leading- text-white">
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
            <button className="p-3 px-10 rounded-full bg-red-500 text-white font-kdam">
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
