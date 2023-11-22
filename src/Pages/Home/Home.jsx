import Latest from "./Latest";
import News from "./News";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="text-center font-extrabold pt-32 dark:bg-gray-900">
      <div className=" max-w-screen-xl mx-auto">
        <div className="mx-5">
          <Welcome />
          <Latest />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
