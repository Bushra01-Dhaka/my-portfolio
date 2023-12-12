import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail, CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="container mx-auto bg-black p-8">
      <h1 className="text-center text-5xl text-white font-bold pb-4">
        Get In <span className="text-green-700 mt-10">Touch</span>
      </h1>
      <p className="text-center max-w-3xl mx-auto py-4">{`Feel free to reach out and discuss your web projects with me. I'm open to collaboration and available for hire to bring your company or product to the online world. Let's create a stunning website that reflects the essence of your brand, anytime and anywhere.`}</p>

      <div>

       

       <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8">
       <div className="">
         <div className="flex items-center gap-2 mx-auto">
         <CiMail className="text-4xl text-green-700 "></CiMail>
            <p className="text-xl">Mail Me</p>
         </div>
           <h2 className="text-white">humayraaanjum87@gmail.com</h2>
        </div>

        <div>
         <div className="flex items-center gap-2">
         <CiPhone className="text-4xl text-green-700"></CiPhone>
            <p className="text-xl">Call me</p>
         </div>
           <h2 className="text-white">+017 04*** ***</h2>
        </div>
       </div>
        
       <div className="flex justify-center pb-8">
          <div className="mt-10 text-3xl flex gap-6 text-green-700 text-center">
            <Link>
              <FaTwitter></FaTwitter>
            </Link>
            <Link>
              <FaFacebook></FaFacebook>
            </Link>
            <Link to="https://www.linkedin.com/in/humayra-anjum-bushra-46b39b2a4/">
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link to='https://github.com/Bushra01-Dhaka'>
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>

        <div className="text-center">
        <Link href="mailto:humayraanjum87@gmail.com">
            <button className="btn rounded-md  border-0 bg-green-700 text-white mr-4 hover:bg-green-500">
             <CiMail></CiMail> Send Mail Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;
