/* eslint-disable react/jsx-key */
import { useParams, useNavigate, Link } from "react-router-dom";
import { posts } from "../../constants/constants";
import { useEffect } from "react";
import Comments from "./Comments";
import Comment from "./Comment";
const DetailedPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, []);
  // Find the post with the matching id
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return <div className="mt-32">Post not found.</div>;
  }
  const categoryPost = posts.filter(
    (postss) => postss.category === post.category && postss.id !== post.id
  );

  // Check if the post is found

  // Handle "Go Back" button click
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className=" max-w-screen-xl mx-auto dark:bg-black pt-28">
      <div className="flex flex-col md:flex-row gap-5 mx-5 lg:mx-auto mb-20 lg:pb-64">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm mb-4">Posted on {post.date}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[65%] object-cover mb-4"
          />

          {/* Description */}
          <p className="text-gray-700 leading-relaxed dark:text-white">
            {post.description}
          </p>
          <div className="pt-10">
            <Comment />
            {post.comments.map((comment) => (
              <Comments {...comment} key={comment.commenter} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 w-full md:w-1/3 lg:w-1/4">
          <div>
            <span className=" font-bold mb-4 dark:text-white">
              More from{" "}
              <span className=" text-xl capitalize underline">
                <Link to={`/category/${post.category}`}>{post.category}</Link>
              </span>
            </span>
          </div>
          <div>
            {categoryPost.map((post) => (
              <h1
                className="text-3xl font-bold mb-4 dark:text-white underline"
                key={post.id}
              >
                <Link to={`/post/${post.title}/${post.id}`}>{post.title}</Link>
              </h1>
            ))}
          </div>
          <button
            onClick={goBack}
            className="mt-8 p-2 dark:bg-white bg-black dark:text-black text-white hover:bg-blue-600 rounded-md mb-5"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
