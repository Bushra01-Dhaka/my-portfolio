import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";


const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default MainLayout;