import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";
const Latest = () => {
  // Assuming posts is your array of data
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  return (
    <div className="from-white to-slate-100 rounded-3xl bg-gradient-to-br mb-5">
      <h3 className="text-2xl mb-4 text-left uppercase border-gray-900 pl-2  border-l-8 hover:text-red-900 hover:border-red-900 cursor-pointer dark:border-white dark:text-white dark:hover:text-red-600 dark:hover:border-red-600">
        Latest
      </h3>
      <div className="flex flex-col sm:flex-row justify-center md:items-start lg:items-center mb-10 gap-3">
        <div className="w-full md:w-1/3 lg:w-[50%]">
          <NewsCard
            {...latestPosts[0]}
            width={"lg:h-[350px] h-[280px] md:h-[560px]"}
          />
        </div>
        <div className="w-full md:1/3 lg:w-[25%]">
          <NewsCard {...latestPosts[1]} width={"lg:h-[170px] h-[280px]"} />
          <div className="">
            <NewsCard {...latestPosts[2]} width={"lg:h-[180px] h-[280px]"} />
          </div>
        </div>{" "}
        <div className="w-full md:1/3 lg:w-[25%] ">
          <NewsCard {...latestPosts[3]} width={"lg:h-[170px] h-[280px]"} />
          <div className="">
            <NewsCard {...latestPosts[2]} width={"lg:h-[180px] h-[280px]"} />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Latest;
