import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../constants/constants";
import { useEffect } from "react";
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
    <div className="mt-28 max-w-screen-xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-5 mx-5 lg:mx-auto">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-4">Posted on {post.date}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[60%] object-cover mb-4"
          />

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{post.description}</p>
        </div>
        <div className="flex flex-col gap-5 p-5 w-full md:w-1/3 lg:w-1/4">
          {categoryPost.map((post) => (
            <h1 className="text-3xl font-bold mb-4" key={post.id}>
              {post.title}
            </h1>
          ))}
        </div>
      </div>
      {/* "Go Back" button */}
      <button
        onClick={goBack}
        className="mt-8 p-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md mb-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default DetailedPost;
