import img from "../../assets/profile-pic.jpg"


const About = () => {
    return (
        <div className="py-8">
              {/* <h1 className="text-center text-5xl text-green-700 font-bold pb-4">About Me</h1> */}
        <div className="hero text-white">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <img src={img} className="w-3/4 rounded-lg shadow-2xl border-8 border-green-700" />
              
            </div>
            <div className="lg:w-1/2 space-y-5 p-4">
              
              {/* <CustomTitle
              subHeader="Our team"
              header="About Us"
              ></CustomTitle> */}
              <div>
              <p className="text-2xl text-white">Hello, {`I'm`}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 py-4">
           Humayra Anjum Bushra
        </h1>
              </div>
  
              <p className="py-6 text-white">
              I am a dedicated web and front-end developer specializing in creating seamless and user-friendly experiences. Proficient in HTML, CSS, JavaScript, React, Express.js, and MongoDB, I excel in crafting visually appealing and responsive web applications. With a keen eye for design and a passion for clean code, I am committed to delivering high-quality, user-centric websites. My expertise lies in developing dynamic and interactive interfaces that enhance the overall user experience.
              </p> 
              {/* <Link><button className="my-4 btn bg-[#F72464] text-white rounded-md  hover:border-2 hover:border-[#F72464] hover:text-[#F72464]  hover:bg-white border-0 ">Explore Classes</button></Link> */}
             

             <div className="flex gap-6">
             <div className="p-4 border-2 border-green-700 rounded-md">
             <h2 className="text-3xl text-green-700 font-extrabold">0.6+</h2>
              <br />
              <p>years experience</p>
             </div>

             <div className="p-4 border-2 border-green-700 rounded-md">
             <h2 className="text-3xl text-green-700 font-extrabold">01+</h2>
              <br />
              <p>completed certification</p>
             </div>
             </div>
            
            </div>

          </div>
        </div>
      </div>
    );
};

export default About;