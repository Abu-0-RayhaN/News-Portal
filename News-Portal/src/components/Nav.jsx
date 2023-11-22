import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
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
      className={`fixed w-full top-0 shadow-xl z-50 backdrop-filter backdrop-blur-lg`}
    >
      <div className="flex flex-col md:flex-row container p-3 justify-between align-middle max-w-screen-xl mx-auto text-center">
        <div className="relative flex">
          <p className="text-4xl font-kanit font-extrabold">
            <span className="text-red-800">Ne</span>
            <span className="text-green-400">ws</span>
            <span className="text-red-600">24</span>
          </p>
          <div className="absolute right-2 md:hidden">
            {isVisible ? (
              <ImCross
                alt="hamburger"
                className="hidden max-lg:block h-9 w-9 pt-2 dark:text-white text-gray-900"
                onClick={handleButtonClick}
              />
            ) : (
              <GiHamburgerMenu
                className="hidden max-lg:block h-9 w-9 pt-2 dark:text-white text-gray-900"
                onClick={handleButtonClick}
              />
            )}
          </div>
        </div>
        <div>
          <ul
            className={`flex-1 flex max-md:flex-col gap-10 font-kanit font-extrabold dark:text-white text-gray-900 p-2  ${
              isVisible ? "flex" : "max-md:hidden"
            }`}
          >
            <li className="hover:text-red-300">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-red-300">
              <a href="#">News</a>
            </li>
            <li className="hover:text-red-300">
              <a href="#">Sport</a>
            </li>
            <li className="hover:text-red-300">
              <a href="#">Earth</a>
            </li>
            <li className="hover:text-red-300">
              <a href="#">Culture</a>
            </li>
            <li className="hover:text-red-300">
              <a href="#">Search bar</a>
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
