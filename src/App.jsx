import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DetailedPost from "./Pages/DetailedPost/DetailedPost";
const App = () => {
  return (
    <div className="dark:bg-black">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="" element={<Home />} exact />
          <Route path="post/:title/:id" element={<DetailedPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
