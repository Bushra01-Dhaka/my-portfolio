import img from "../../assets/profile-pic.jpg"
import bg from "../../assets/about-bg.jpeg"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
        <div style={{backgroundImage: `url(${bg})`}} className="hero min-h-screen bg-fixed bg-black bg-cover bg-center bg-opacity-80 py-8 text-white">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img src={img} className="w-3/4 rounded-lg shadow-2xl border-8 border-green-700" />
              {/* <img
                src={img}
                className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-green-700 shadow-2xl"
              /> */}
            </div>
            <div className="lg:w-1/2 space-y-5 p-4">
              
              {/* <CustomTitle
              subHeader="Our team"
              header="About Us"
              ></CustomTitle> */}
              <div>
              <p className="text-2xl text-black">Hello, {`I'm`}</p>
        <h1 className="text-6xl font-bold text-green-700 py-4">
           Humayra Anjum Bushra
        </h1>
              </div>
  
              <p className="py-6 text-slate-700">
              I am a dedicated web and front-end developer specializing in creating seamless and user-friendly experiences. Proficient in HTML, CSS, JavaScript, React, Express.js, and MongoDB, I excel in crafting visually appealing and responsive web applications. With a keen eye for design and a passion for clean code, I am committed to delivering high-quality, user-centric websites. My expertise lies in developing dynamic and interactive interfaces that enhance the overall user experience.
              </p> 
              {/* <Link><button className="my-4 btn bg-[#F72464] text-white rounded-md  hover:border-2 hover:border-[#F72464] hover:text-[#F72464]  hover:bg-white border-0 ">Explore Classes</button></Link> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;