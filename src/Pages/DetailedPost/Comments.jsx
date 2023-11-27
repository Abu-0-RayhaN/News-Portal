/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";

const Comments = ({ commenter, comment }) => {
  return (
    <div className="flex items-center space-x-4 mb-4 mt-5 bg-slate-100 rounded-xl p-5">
      <FaUser size={30} /> {/* Adjust the size as needed */}
      <div className="pt-1 w-2/3">
        <p className="font-semibold">{commenter}</p>
        <h4>{comment}</h4>
      </div>
    </div>
  );
};

export default Comments;
