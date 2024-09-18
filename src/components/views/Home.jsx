import { ScrollingLogoSlider } from "../ScrollingLogoSlider";

export const Home = () => {

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Michael Galo</h1>
            <h2 className="text-3xl font-semibold text-center">Developer Portfolio</h2>
            
            {/* Bio Section */}
            <section id="bio" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Bio</h2>
                <p className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                Hey there, I'm Michael, a junior full-stack web developer entering the tech industry from the side-door.
                <br />
                <br />
                Transitioning from a career in non-profit marketing & communications from the entry level to the executive level, I bring to the team years of project collaboration, strategy communication and problem-solving. With around a decade working in marketing and brand-management, I decided to take the scary, next right step into tech.
                <br />
                <br />
                Why did I make the switch? 
                <br />
                <br />
                While I've always chased after creative pursuits (photography, design, writing, etc.), I hadn't quite found the analytical challenge I was craving. After learning to solve real-life problems with code, I found a fantastic blend of logic, creativity and a sprinkling of magic. The rest is history.
                <br />
                <br />
                As I'm new to the industry as a whole, I'd love to meet up with all of you Nashville & beyond tech-wizards!
                </p>
            </section>

            {/* Tech Stack Section */}
            <section id="tech" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md ">
                    <ScrollingLogoSlider />
                </div>
            </section>            

            {/* Projects Section */}
            <section id="projects" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <ul className="list-disc list-inside">
                        <div>
                            <h3><strong>NSS Client-Side Capstone: Roll for Recipe | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/MichaelGalo/Roll-for-Recipe">View Code</a></strong></h3>
                            <p>Roll-for-Recipe allows a user to create, read, update and delete recipes while also giving the
                            functionality to pick however many recipes a user thinks they'll need to cook that week. It will take from your saved recipes (whether authored or favorited) and generate random options to select from. In addition it will automatically create a shopping list that can be utilized while grocery shopping.
                            <br />
                            <br />
                            <strong>Problem this app solves: </strong>
                            My aim for this app was to fix the time-gap between deciding on what to shop for and actually going to the grocery store with a dedicated list. It's created to give back some free time to busy people who like to cook and shop strategically.
                            <br />
                            <br />
                            <strong>Primary learning objectives: </strong>
                            Transition from vanilla JS to React, Implementing a CSS Framework (Bootstrap), Many-to-many relationships
                            management, mobile-friendly UI/UX, solving a real-world problem with code</p>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div>
                            <h3><strong>NSS Server-Side Capstone: Nook | (Scheduled for Nov Release)</strong></h3>
                            <p>Nook allows a user to access a platform where users can manage their book collections, including adding, editing, deleting, and viewing books. Features such as books-to-read, books read, current book & progress bar among others would make this a useful tool for book worms looking to keep track of their reading.</p>
                            <br />
                            <strong>Primary learning objectives: </strong>
                            Continued React proficiency, learning Django, creating a RESTful API, creating a full-stack application, managing a database, implementing a user authentication system, and creating a user-friendly UI/UX.
                        </div>
                        <br />
                        <hr />
                        <br />                
                        <div>
                            <h3><strong>Group Project: Rare Publishing | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/rare-client-jam_clamz">Client Code</a> | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/rare-api-jam_clamz_api">API Code</a></strong></h3>
                            <p>This was a group project from NSS that was meant to simulate an endless backlog of issue tickets in a Github project board. The goal was not to finish the project, but to practice strategies & teamwork on how to tackle an endless flow of ticks. 
                            <br />
                            <br />
                            Ultimately, the finished application would give users the ability to submit, update and comment on posts. The posts would also be organized by tags and categories making it easier for the reader to find the posts they are searching for.
                            <br />
                            <br />
                            <strong>Project Goals:</strong> Simulate a real-world working environment by working with a team to create a full-stack application with a SCRUM workflow. Emphasis on weighting issue tickets, practicing great communication, PR & code reviews, and retrospectives.
                            </p>
                        </div>
                    </ul>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p>If you'd like to get in touch, feel free to reach out via email at <a target="_blank" href="mailto:michael@michaelthinks.co" className="text-blue-500 dark:text-blue-300">michael@michaelthinks.co</a>.</p>
                </div>
            </section>
        </div>
    );
}


//TODO: Add tailwind css for text
//TODO: Add Tabs for the projects section to change views by project
// tabs to include capstone projects & a group projects section