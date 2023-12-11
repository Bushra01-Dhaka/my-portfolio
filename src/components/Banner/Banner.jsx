import { Link } from "react-router-dom";
import { FaDownload, FaFacebook, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex justify-center items-center lg:h-[100vh]">
      <div className="py-10">
        <p className="text-2xl text-white">Hello, {`I'm Bushra.`}</p>
        <h1 className="text-6xl font-bold text-green-700 py-4">
          Web Developer|
        </h1>

        <p className="max-w-lg">
          I am a web developer & front-end developer focused on crafting clean &
          user-friendly experience.{" "}
        </p>

        <div className="mt-10 text-3xl flex gap-6 text-green-700">
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
        <div className="py-6 " >
          <Link>
            <button className="btn rounded-md  border-0 bg-green-700 text-white mr-4 hover:bg-green-500">
             <FaPhone></FaPhone> Contact Now
            </button>
          </Link>
          <Link>
            <button className="btn rounded-md  border-2 border-green-700 text-green-700">
             <FaDownload></FaDownload> Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
