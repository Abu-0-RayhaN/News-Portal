import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-black pb-8 text-white text-xl">
      <footer className="max-w-screen-xl md:mx-auto flex flex-col md:flex-row gap-5 items-start justify-evenly pt-20 flex-wrap mx-[10%]">
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-5 justify-center">
            <a href="/">
              <p className="text-4xl font-kanit font-extrabold">
                <span className="text-white dark:text-red-800">Ne</span>
                <span className="text-white dark:text-green-400">ws</span>
                <span className="text-white dark:text-red-600">24</span>
              </p>
            </a>
            <div>
              <p className="font-manrope">
                Read the latest news to this website. we provide <br /> best
                news with valid source and we speak the truth. <br /> If you
                want to stay updated subscribe newsLetter{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <FaFacebook className="h-12 w-12" />
            <FaGithub className="h-12 w-12" />
            <FaLinkedin className="h-12 w-12" />
            <FaInstagramSquare className="h-12 w-12" />
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center align-middle font-kanit">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 font-kanit">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <a href="mailto:customer@nike.com">customer@nike.com</a>
            </li>
            <li>
              <a href="#">+92554862354</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="flex justify-between text-white-400 mt-24 max-w-screen-xl xl:mx-auto  mx-5">
        <div className="flex flex-1 justify-start items-center gap-2 font-kanit cursor-pointer">
          <FaRegCopyright width={22} height={22} className="rounded-full m-0" />
          <p>Md Rayhan</p>
        </div>
        <p className="cursor-pointer font-kanit">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
