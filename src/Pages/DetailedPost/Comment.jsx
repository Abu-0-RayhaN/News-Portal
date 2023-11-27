const Comment = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="input comment"
        className=" bg-gray-300 h-14 p-5 px-8 rounded-lg focus:outline-none  text-gray-900 placeholder:text-gray-900 font-kanit"
      />
      <button className="p-3 px-5 mx-3 bg-blue-600 rounded-full focus:bg-blue-300 font-kdam">
        Button
      </button>
    </div>
  );
};

export default Comment;
