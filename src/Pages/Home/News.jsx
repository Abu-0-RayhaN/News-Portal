// import React from 'react'
import { useState, useEffect } from "react";
import NewsCard from "../../components/NewsCard";
import { posts } from "../../constants/constants";

const News = () => {
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

  return (
    <div>
      {Object.entries(categoryPosts).map(([category, categoryPosts]) => (
        <div key={category} className="">
          <h3 className="text-2xl mb-4 text-left uppercase border-gray-900 pl-2  border-l-8 hover:text-red-900 hover:border-red-900 cursor-pointer dark:border-white dark:text-white dark:hover:text-red-600 dark:hover:border-red-600">
            {category}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-10 ">
            {categoryPosts.slice(0, 3).map((post) => (
              <NewsCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
