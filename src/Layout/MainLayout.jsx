import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Skills from "../components/Skills/Skills";


const MainLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default MainLayout;