import { IoLogoYoutube, IoLogoFacebook } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import ActionButton from "../../UI/ActionButton/ActionButton";

const Header = () => {
  return (
    <header
      id="header_section"
      className={`bg-gray-200 border-b-2 border-gray-400`}
    >
      <div className=" max-w-7xl m-auto py-2 px-4 flex flex-wrap gap-4 justify-evenly md:justify-between items-center ">
        {/*  Phone, Email */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-4 divide-x-0 md:divide-x-1">
            {/* phone  */}
            <div>
              <a
                href="tel:+8801782841671"
                className="flex items-center gap-1  "
                title="ফোন করুন"
              >
                <FaPhoneAlt className="border p-1 text-white  text-2xl md:text-xl bg-emerald-700 rounded md:border-0 md:bg-transparent md:text-black md:p-0" />
                <span className="text-black pr-4 hidden md:block">
                  01782841671
                </span>
              </a>
            </div>
            {/* email address  */}
            <div className="hidden md:block">
              <a
                href="mailto:squarpoly@gmail.com"
                className="flex items-center gap-1 "
                title="ইমেল পাঠান"
              >
                <MdOutlineMarkEmailRead className="text-2xl " />
                <span className="text-black">squarepoly@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Apply Button */}
        <div className="flex  items-center gap-4 md:gap-10">
          <div className="flex items-center gap-4  text-black divide-x-0 md:gap-2 md:divide-x">
            {/* Facebook  */}
            <div className="">
              <a
                href="https://www.facebook.com/squarepolytechnic"
                target="_blank"
                className="flex items-center gap-1 "
                title="ফেসবুকে যান"
              >
                <IoLogoFacebook className="text-2xl text-blue-600" />
                <span className=" hidden mr-0 md:mr-2  md:block ">
                  Facebook
                </span>
              </a>
            </div>
            {/* Youtube  */}
            <div>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1"
                title="ইউটিউবে যান"
              >
                <IoLogoYoutube className="text-xl text-red-500" />
                <span className="hidden mr-0 md:mr-2 md:block">YouTube</span>
              </a>
            </div>
            {/* linkedin  */}
            <div>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1"
                title=""
              >
                <FaLinkedin className="text-xl text-blue-800" />
                <span className="hidden  mr-0 md:mr-2 md:block ">Linkedin</span>
              </a>
            </div>

            {/* Instagram  */}
            {/* <div>
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-1"
                title=""
              >
                <FaInstagramSquare className="text-xl text-pink-600" />
                <span className="hidden md:block">Instagram</span>
              </a>
            </div> */}
          </div>
          {/* admission button  */}
          <div className="ml-10">
            <ActionButton
              text={"Admission"}
              link="/admission"
              bg_color={"bg-green-600"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
