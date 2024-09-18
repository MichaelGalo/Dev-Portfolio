import { ThemeToggle } from "./ThemeToggle";


export const Navbar = () => {
    return (
        <div className="flex justify-center bg-white dark:bg-gray-900 p-4">
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#bio" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
                    </li>
                    <li>
                        <a href="#tech" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Technologies</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    );
}