import { Link } from "react-router-dom";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Banner = () => {
  const handleDownload = () => {
    // Create a Blob containing the text content
    const blob = new Blob(['Welcome to the CV file'], { type: 'text/plain' });

    // Create a temporary anchor element
    const a = document.createElement('a');

    // Set the download attribute to specify the file name
    a.download = 'your_cv.txt';

    // Create a URL for the Blob and set it as the href attribute
    a.href = window.URL.createObjectURL(blob);

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Trigger a click on the anchor element to start the download
    a.click();

    // Remove the temporary anchor element
    document.body.removeChild(a);
  };

  return (
    <div className="flex justify-center items-center lg:h-[100vh] bg-green-700 ">
      <div className="py-10 px-6 text-center bg-black  md:text-justify">
        <p className="text-2xl text-white">Hello, {`I'm Bushra.`}</p>
        <h1 className="text-6xl font-bold text-green-700 py-4">
          Web Developer|
        </h1>

        <p className="max-w-lg">
          I am a web developer & front-end developer focused on crafting clean &
          user-friendly experience.{" "}
        </p>

        <div className="mt-10 text-3xl flex justify-center gap-6 text-green-700">
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link to='https://github.com/Bushra01-Dhaka'>
            <FaGithub></FaGithub>
          </Link>
          <Link to='https://www.linkedin.com/in/humayra-anjum-bushra-46b39b2a4/'>
            <FaLinkedin></FaLinkedin>
          </Link>
        </div>
        
        <div className="py-6 mx-auto" >
          <Link href="mailto:humayraanjum87@gmail.com">
            <button className="btn rounded-md  border-0 bg-green-700 text-white mr-4 hover:bg-green-500">
             <CiMail></CiMail> Send Mail
            </button>
          </Link>
          <Link>
            <button className="btn rounded-md  border-2 border-green-700 text-green-700 bg-black"
             onClick={handleDownload}
            >
             <FaDownload></FaDownload> Download CV
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Banner;
