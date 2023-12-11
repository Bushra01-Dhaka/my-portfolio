import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";


const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    );
};

export default MainLayout;