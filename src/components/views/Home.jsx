import {Bio} from "../Bio"
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { Projects } from "../Projects";
import { TechStack } from "../TechStack";

export const Home = () => {

    return (
<>
<div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Michael Galo</h1>
            <h2 className="text-3xl font-semibold text-center">Developer Portfolio</h2>
            <Bio />
            <TechStack />            
            <Projects />
            <Contact />
        </div>
            <Footer /></>
    );
}
