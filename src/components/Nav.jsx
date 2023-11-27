import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Search from "./Search";
const Nav = () => {
  const [theme, setTheme] = useState("dark");
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav
      className={`fixed w-full top-0 shadow-xl z-50 dark:backdrop-filter dark:backdrop-blur-lg bg-black dark:bg-transparent`}
    >
      <div className="flex flex-col md:flex-row container px-2 py-2 justify-between align-middle max-w-screen-xl mx-auto text-center">
        <div className="relative flex">
          <p className="text-4xl font-kanit font-extrabold">
            <span className="text-white dark:text-red-800 ">Ne</span>
            <span className="text-white dark:text-green-400">ws</span>
            <span className="text-white dark:text-red-600">24</span>
          </p>
          <div className="absolute right-2 md:hidden">
            {isVisible ? (
              <ImCross
                alt="hamburger"
                className="hidden max-lg:block h-9 w-9 pt-2 text-white "
                onClick={handleButtonClick}
              />
            ) : (
              <GiHamburgerMenu
                className="hidden max-lg:block h-9 w-9 pt-2 text-white "
                onClick={handleButtonClick}
              />
            )}
          </div>
        </div>
        <div>
          <ul
            className={`flex-1 flex max-md:flex-col gap-4 md:gap-10 font-kanit font-extrabold text-white p-2 text-xl items-center
            ${isVisible ? "flex" : "max-md:hidden"}
            `}
          >
            <li className="hover:text-red-300">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-red-300">
              <Link to={`/category/${"sports"}`}>Sports</Link>
            </li>
            <li className="hover:text-red-300">
              <Link to={`/category/${"politics"}`}>Politics</Link>
            </li>
            <li className="hover:text-red-300">
              <Link to={`/category/${"earth"}`}>Earth</Link>
            </li>
            <li className="hover:text-red-300">
              <Link to={`/category/${"culture"}`}>Culture</Link>
            </li>
            <li className="">
              <Search />
            </li>

            <span
              onClick={handleThemeSwitch}
              className="p-2 rounded-2xl dark:bg-gray-500 bg-gray-800 cursor-pointer text-white max-w flex items-center "
            >
              {theme === "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
