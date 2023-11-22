import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";

const Home = () => {
  const [categoryPosts, setCategoryPosts] = useState({});

  useEffect(() => {
    // Group posts by category
    const groupedPosts = posts.reduce((acc, post) => {
      acc[post.category] = acc[post.category] || [];
      acc[post.category].push(post);
      return acc;
    }, {});

    // Save the grouped posts in the state
    setCategoryPosts(groupedPosts);
  }, []);
  console.log(categoryPosts);
  return (
    <div className="text-center font-extrabold pt-20 dark:bg-gray-900">
      <div className=" max-w-screen-xl mx-auto">
        {Object.entries(categoryPosts).map(([category, categoryPosts]) => (
          <div key={category}>
            <h3 className="text-2xl mb-4">{category}</h3>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4 mx-[20%] sm:mx-auto">
              {categoryPosts.slice(0, 3).map((post) => (
                <NewsCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
