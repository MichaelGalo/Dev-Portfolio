import { ThemeToggle } from '../ThemeToggle';

export const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 p-4">
            <ul className="flex space-x-4">
                <li>
                    <a href="/" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">About</a>
                </li>
                <li>
                    <a href="/projects" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
                </li>
                <li>
                    <a href="/tech" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Technologies</a>
                </li>
                <li>
                    <a href="/contact" className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

// TODO: have each button in the nav move to the correct header on the page