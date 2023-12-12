import { Link } from "react-router-dom";
import fit from "../../assets/icons/fithub.png"
import tele from "../../assets/icons/talenify.png"
import auto from "../../assets/icons/auto.png"
import { FaArrowUp } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="py-[100px]">
      <h1 className="text-center text-5xl text-white font-bold pb-4">
        Recent <span className="text-green-700">Projects</span>
      </h1>

    

      <div className="flex flex-col md:flex-row px-6 gap-6 my-[50px]">
          <div className="flex-1">
            <img 
            className="h-[400px] w-[600px] rounded"
            src={fit} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-green-700">FitHub</h1>
            <p className="py-4">The web project FITHUB stands out for its holistic approach to fitness management, offering a seamless experience for users, trainers, and administrators.</p>

            <div>
                <h2 className="text-xl font-bold text-green-700">Technology Used</h2>
                <ul>
                    <li>- React</li>
                    <li>- Mongodb</li>
                    <li>- Express Js</li>
                    <li>- Html</li>
                    <li>- Css</li>

                </ul>
            </div>

            <div className="flex gap-4">
            <Link to='https://fithub-d6165.web.app/'>
            <button className="btn rounded-md  border-0 bg-green-700 text-white hover:bg-green-500 my-6"><FaArrowUp></FaArrowUp>    Visit Website</button>
          </Link>


            </div>


          </div>
      </div>


      <div className="flex flex-col md:flex-row px-6 gap-6 my-[50px]">
          <div className="flex-1">
            <img 
            className="h-[400px] w-[600px] rounded"
            src={tele} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-green-700">Telenify</h1>
            <p className="py-4">Talenify is an interactive react website, for both job seekers and job posters, with user-friendly features for exploring, bidding on, and managing job listings in a secure and organized manner.</p>

            <div>
                <h2 className="text-xl font-bold text-green-700">Technology Used</h2>
                <ul>
                    <li>- React</li>
                    <li>- Mongodb</li>
                    <li>- Express Js</li>
                    <li>- Html</li>
                    <li>- Css</li>

                </ul>
            </div>

            <Link to='https://talenify.web.app/'>
            <button className="btn rounded-md  border-0 bg-green-700 text-white hover:bg-green-500 my-6"><FaArrowUp></FaArrowUp> Visit Website
            </button>
          </Link>
          </div>
      </div>



      <div className="flex flex-col md:flex-row px-6 gap-6 my-[50px]">
          <div className="flex-1">
            <img 
            className="h-[400px] w-[600px] rounded"
            src={auto} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-green-700">AutoEdition</h1>
            <p className="py-4">AutoEdition is an automobile-focused project website that offers users a seamless and secure experience. </p>

            <div>
                <h2 className="text-xl font-bold text-green-700">Technology Used</h2>
                <ul>
                    <li>- React</li>
                    <li>- Mongodb</li>
                    <li>- Express Js</li>
                    <li>- Html</li>
                    <li>- Css</li>

                </ul>
            </div>

            <Link to='https://auto-edition.web.app/'>
            <button className="btn rounded-md  border-0 bg-green-700 text-white hover:bg-green-500 my-6"><FaArrowUp></FaArrowUp> Visit Website
            </button>
          </Link>
          </div>
      </div>




      </div>
    
  );
};

export default Projects;
