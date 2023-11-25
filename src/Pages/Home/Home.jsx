import { useEffect } from "react";
import Latest from "./Latest";
import News from "./News";
import Subscribe from "./Subscribe";
import Welcome from "./Welcome";
const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-center font-extrabold pt-32 ">
      <div className=" max-w-screen-xl mx-auto">
        <div className="mx-5">
          <Welcome />
          <Latest />
          <News />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default Home;
