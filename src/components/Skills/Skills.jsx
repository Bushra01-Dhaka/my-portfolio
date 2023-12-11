import html from "../../assets/icons/html.png"
import css from "../../assets/icons/css.png"
import js from "../../assets/icons/js.png"
import re from "../../assets/icons/react.png"
import node from "../../assets/icons/node.png"

const Skills = () => {
    return (
        <div className="py-10">
            <h1 className="text-center text-5xl text-green-700 font-bold mb-10">My Skills</h1>

            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6 py-8">
                 <div>
                    <div className=" py-4">
                    <h2 className="text-2xl font-bold text-center text-white">Technical Skills</h2>
                    <hr />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0 mt-8">
                    <div className="w-full">
                        <img 
                        className="h-[50px] w-[50px]"
                        src={html} alt="" />
                        <h2 className="text-md text-bold text-white">HTML</h2>
                        <progress className="progress progress-success  w-56" value="85" max="100"></progress>
                    </div>

                    <div className="w-full">
                        <img 
                        className="h-[50px] w-[50px]"
                        src={css} alt="" />
                        <h2 className="text-md text-bold text-white">CSS</h2>
                        <progress className="progress progress-success  w-56" value="70" max="100"></progress>
                    </div>

                    <div className="w-full">
                        <img 
                        className="h-[50px] w-[50px]"
                        src={js} alt="" />
                        <h2 className="text-md text-bold text-white">JS</h2>
                        <progress className="progress progress-success  w-56" value="60" max="100"></progress>
                    </div>

                    <div className="w-full">
                        <img 
                        className="h-[50px] w-[50px]"
                        src={re} alt="" />
                        <h2 className="text-md text-bold text-white">React</h2>
                        <progress className="progress progress-success  w-56" value="70" max="100"></progress>
                    </div>

                    <div className="w-full">
                        <img 
                        className="h-[50px] w-[50px]"
                        src={node} alt="" />
                        <h2 className="text-md text-bold text-white">Node Js</h2>
                        <progress className="progress progress-success  w-56" value="50" max="100"></progress>
                    </div>


                    </div>

                  
                 </div>

{/* right */}
                 <div>
                 <div className=" py-4">
                    <h2 className="text-2xl font-bold text-center text-white">Professional Skills</h2>
                    <hr />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 text-center">
                        <div className="">
                        <div className="radial-progress text-success" style={{"--value":90, "--size": "8rem"}} role="progressbar">90%</div>
                        <p className="text-white text-center py-4">Creativity</p>
                        </div>
                       
                        <div className="">
                        <div className="radial-progress text-success" style={{"--value":65, "--size": "8rem"}} role="progressbar">65%</div>
                        <p className="text-white text-center py-4">Communication</p>
                        </div>

                        <div className="">
                        <div className="radial-progress text-success" style={{"--value":60, "--size": "8rem"}} role="progressbar">60%</div>
                        <p className="text-white text-center py-4">Problem Solving</p>
                        </div>

                        <div className="">
                        <div className="radial-progress text-success" style={{"--value":80, "--size": "8rem"}} role="progressbar">80%</div>
                        <p className="text-white text-center py-4">Teamwork</p>
                        </div>


                    </div>


                 </div>

            </div>
        </div>
    );
};

export default Skills;