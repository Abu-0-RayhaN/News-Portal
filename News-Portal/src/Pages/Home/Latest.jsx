import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";
const Latest = () => {
  // Assuming posts is your array of data
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // Take the three latest objects

  return (
    <div>
      <h3 className="text-2xl mb-4 text-left uppercase border-gray-900 pl-2  border-l-8 hover:text-red-900 hover:border-red-900 cursor-pointer dark:border-white dark:text-white dark:hover:text-red-600 dark:hover:border-red-600">
        Latest
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10 ">
        <NewsCard {...latestPosts[0]} />
        <NewsCard {...latestPosts[1]} />
        <NewsCard {...latestPosts[2]} />
      </div>
    </div>
  );
};

export default Latest;
