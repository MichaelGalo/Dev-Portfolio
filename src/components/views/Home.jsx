import { ScrollingLogoSlider } from "../ScrollingLogoSlider";
import 'flowbite';

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
                While I've always chased after creative pursuits (photography, design, writing, etc.), I hadn't quite found the analytical challenge I was craving. After learning to solve real-life problems with code, I found a fantastic blend of logic, creativity and a sprinkling of magic. After that, I was hooked.
                </p>
            </section>

            {/* Tech Stack Section */}
            <section id="tech" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md ">
                    <ScrollingLogoSlider />
                </div>
            </section>            

            {/* New Projects Section */}
            <section id="projects" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Client-Side Capstone</button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Server-Side Capstone</button>
                        </li>
                        <li class="me-2" role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Group Projects</button>
                        </li>
                        <li role="presentation">
                            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Individual Projects</button>
                        </li>
                    </ul>
                </div>
                <div id="default-styled-tab-content">
                    <div class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3><strong>NSS Client-Side Capstone: Roll for Recipe | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/MichaelGalo/Roll-for-Recipe">Client Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        Roll-for-Recipe allows a user to create, read, update and delete recipes while also giving the
                        functionality to pick however many recipes a user thinks they'll need to cook that week. It will take from your saved recipes (whether authored or favorited) and generate random options to select from. In addition it will automatically create a shopping list that can be utilized while grocery shopping. Read on <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/MichaelGalo/Roll-for-Recipe">here</a>.
                        </p>
                    </div>
                    <div class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <h3><strong>NSS Server-Side Capstone: Nook | (Scheduled for Nov Release)</strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        <p>Nook allows a user to access a platform where users can manage their book collections, including adding, editing, deleting, and viewing books. Features such as books-to-read, books read, current book & progress bar among others would make this a useful tool for book worms looking to keep track of their reading.</p>
                        </p>
                    </div>
                    <div class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                        <h3><strong>Full-Stack: Bangazon | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/bangazon-client-404prime">Client Code</a> | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/bangazon-api-404prime">API Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        This project was designed to simulate the experience of joining a larger, e-commerce project with an unfamiliar codebase and a framework we didn't know. This project utilizes Next.js, which was unfamiliar to us. We also learned about integration testing and had to learn how to create our own tests & custom reports. I worked on tasks involving bug fixes, new feature development, custom reporting and automated testing. 
                        <br />
                        <br />
                        <strong>Project Goals:</strong> Effective & efficient reading of documentation for unfamiliar technologies (a legacy version of Next.js), debugging an unfamiliar codebase, creation of integration tests, Django custom reports, and an introduction to Server-Side Rendering. 
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3><strong>Full-Stack: Rare Publishing | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/rare-client-jam_clamz">Client Code</a> | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/rare-api-jam_clamz_api">API Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        This was a group project from NSS that was meant to simulate an endless backlog of issue tickets in a Github project board. The goal was not to finish the project, but to practice strategies & teamwork on how to tackle an endless flow of tickets. Ultimately, the finished application would give users the ability to submit, update and comment on posts. The posts would also be organized by tags and categories making it easier for the reader to find the posts they are searching for.
                        <br />
                        <br />
                        <strong>Project Goals:</strong> Simulate a real-world working environment by working with a team to create a full-stack application with a SCRUM workflow. Emphasis on weighting issue tickets, practicing great communication, PR & code reviews, and retrospectives.
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3><strong>Client-Side: Exomine | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/exomine-elden-mine">View Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        This was a group project that aimed to manage the resources for minerals between colonies housed on different planets. The main focus of this app was communication, issue-ticket creation and algorithmic thinking on how to tackle the ERD. On top of that, it was one of the first projects we really tackled CSS strategy. 
                        <br />
                        <br />
                        <strong>Project Goals:</strong> Practicing with Git & GitHub Project boards, managing merge conflicts, Pull Request best practices, ERD collaboration and pseudo-coding our modules ahead of development. Also there was a focus on managing state in Vanilla JS.
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3><strong>Client-Side: Cider Falls | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/NSS-Day-Cohort-71/cider-falls-hard-coded-cider">View Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        This project had our team building an application for the Cider Falls National Park that will track park area, park activities, and park guests. This project was our first with zero boilerplate code, so we had to manage every piece of the development process ourselves.
                        <br />
                        <br />
                        <strong>Project Goals:</strong> Communication with difficult or different teammate communication styles, delegation of issue tickets, wire-framing and self-guided education on new JavaScript array and string methods. 
                        </p>
                    </div>
                    <div class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
                        <h3><strong>Reader's Digest API | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/MichaelGalo/readers-digest">API Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        The Readers Digest API is a Django-based back-end application that enables users to create, retrieve, update, and delete book reviews. Built with Django REST Framework, the API supports secure user authentication, book and review management, and many-to-many relationships for categorizing books. It also integrates SQLite3 for data storage, uses fixtures for efficient database seeding, and includes CORS support to allow seamless frontend communication. This project demonstrates my ability to design RESTful APIs, manage relational databases, and implement user authentication in web applications.
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3><strong>Learning Moments | <a target="_blank" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/MichaelGalo/learning-moments">Client Code</a></strong></h3>
                        <p class="text-sm text-black dark:text-gray-400">
                        This application is a simple client-side CRUD (Create, Read, Update, Delete) application that uses a JSON database. It was developed as a learning project to understand the basics of client-side CRUD functionality in React prior to my capstone season. The goal of this app was to showcase whenever you or someone you know has an "ah-ha!" moment to share -- similar to a basic twitter clone.
                        </p>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Contact</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <p>If you'd like to get in touch, feel free to reach out via email at <a target="_blank" href="mailto:michael@michaelthinks.co" className="text-blue-500 dark:text-blue-300">michael@michaelthinks.co</a> or find me <a target="_blank" href="https://linktr.ee/michaelthinks" className="text-blue-500 dark:text-blue-300">HERE</a> on social media.</p>
                </div>
            </section>
        </div>
    );
}


// https://github.com/NSS-Day-Cohort-71/cider-falls-hard-coded-cider