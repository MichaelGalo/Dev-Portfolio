import "flowbite";
import { WebDevProjects } from "../WebDev";
import { DataProjects } from "../DataProjects";

export const Projects = () => {
  return (
    <>
      <section id="projects" className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Data Engineering</h2>
        <DataProjects />
        <br />
        <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
        <WebDevProjects />
      </section>
    </>
  );
};
