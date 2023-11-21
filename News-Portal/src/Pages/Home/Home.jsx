// import React from 'react'

// import NewsCard from "../../components/NewsCard";
import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";
const Home = () => {
  console.log(posts);
  return (
    <div className="text-center font-extrabold pt-20 dark:bg-gray-900">
      <p>Hello from main branch of this world</p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4 mx-[20%] sm:mx-auto">
        {posts.map((product) => (
          <NewsCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
