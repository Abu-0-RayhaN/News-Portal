const Nav = () => {
  return (
    <nav className="bg-gray-600">
      <div className="flex  container p-3 justify-between align-middle ">
        <div>
          <p className="text-4xl font-kanit">
            <span className="text-red-100">Ne</span>
            <span className="text-green-100">ws</span>
            <span className="text-red-400">24</span>
          </p>
        </div>
        <div>
          <ul className="flex gap-10 font-manrope ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Earth</a>
            </li>
            <li>
              <a href="#">Culture</a>
            </li>
            <li>
              <a href="#">Search bar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
