import "flowbite";
import { WebDevProjects } from "../WebDev";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <WebDevProjects />
      </section>
    </>
  );
};
