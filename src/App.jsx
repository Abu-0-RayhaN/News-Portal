import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="dark:bg-gray-900">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
