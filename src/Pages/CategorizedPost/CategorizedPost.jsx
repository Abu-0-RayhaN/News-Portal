// Import necessary modules and components
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../constants/constants";
import CategoryCard from "../../components/CategoryCard";
const CategorizedPost = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  // Filter posts by category
  const categoryPosts = posts.filter((post) => post.category === category);
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className="pt-28 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-10">
        {categoryPosts.map((post) => (
          <CategoryCard key={post.id} {...post} />
          //   <h4 key={post.id}>{post.author}</h4>
        ))}
      </div>
      <button
        onClick={goBack}
        className="mt-8 p-2 dark:bg-white bg-black dark:text-black text-white hover:bg-blue-600 rounded-md mb-5"
      >
        Go Back
      </button>
    </div>
  );
};

export default CategorizedPost;
