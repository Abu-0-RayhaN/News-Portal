// import React from 'react'
import { useState, useEffect } from "react";
import { posts } from "../../constants/constants";
import MainNewsCard from "../../components/MainNewsCard";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-10 ">
            {categoryPosts.slice(0, 3).map((post) => (
              <MainNewsCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
