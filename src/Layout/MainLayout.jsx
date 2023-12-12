
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
   
  return (
    <div>
        <div className="navbar bg-black text-primary-content">
  <button className="btn btn-ghost text-xl text-white">{`Portfolio.`}</button>
</div>
    
      <Banner></Banner>
      <About ></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>

      <footer className="footer footer-center p-4 bg-green-700 text-base-content">
  <aside>
    <p>Copyright © 2023 - humayraanjum87@gmail.com</p>
  </aside>
</footer>
    </div>
  );
};

export default MainLayout;
