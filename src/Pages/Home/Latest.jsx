import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";
const Latest = () => {
  // Assuming posts is your array of data
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  const latestpost = {
    ...latestPosts[1],
    description: undefined,
  };
  const latestpost2 = {
    ...latestPosts[0],
    description: undefined,
  };
  const latestpost3 = {
    ...latestPosts[2],
    description: undefined,
  };
  return (
    <div>
      <h3 className="text-2xl mb-4 text-left uppercase border-gray-900 pl-2  border-l-8 hover:text-red-900 hover:border-red-900 cursor-pointer dark:border-white dark:text-white dark:hover:text-red-600 dark:hover:border-red-600">
        Latest
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10 ">
        <NewsCard {...latestpost3} />
        <NewsCard {...latestpost} />
        <NewsCard {...latestpost2} />
      </div>
    </div>
  );
};

export default Latest;
