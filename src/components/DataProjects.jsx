export const DataProjects = () => {
    return (
    <>
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
            data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="data-capstone-styled-tab"
                data-tabs-target="#styled-data-capstone"
                type="button"
                role="tab"
                aria-controls="data-capstone"
                aria-selected="false"
              >
                Data Engineering Capstone
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="data-group-styled-tab"
                data-tabs-target="#styled-data-group"
                type="button"
                role="tab"
                aria-controls="data-group"
                aria-selected="false"
              >
                Group Projects
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="data-individual-styled-tab"
                data-tabs-target="#styled-data-individual"
                type="button"
                role="tab"
                aria-controls="data-individual"
                aria-selected="false"
              >
                Individual Projects
              </button>
            </li>
          </ul>
        </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800"
            id="styled-data-capstone"
            role="tabpanel"
            aria-labelledby="data-capstone-tab"
          >
            <h3>
              <strong>
                NSS Data Engineering Capstone: TBA
                </strong>
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
              <p>
                This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
              </p>
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800"
            id="styled-data-group"
            role="tabpanel"
            aria-labelledby="data-group-tab"
          >
            <h3>
              <strong>
                Jannell's Car Sales |{" "}
                <a
                  target="_blank"
                  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  href="https://github.com/NSS-Data-Engineering-May2025/project-1-jannells-car-sales-docker-compose-yourself-1"
                >
                Code
                </a>
              </strong>
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
             This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
              <br />
              <br />
              <strong>Project Goals:</strong> This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
            </p>
            <br />
            <hr />
            <br />
            <h3>
              <strong>
                Project 2 Placeholder |{" "}
                  Code
              </strong>
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
              This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
            </p>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-200 dark:bg-gray-800"
            id="styled-data-individual"
            role="tabpanel"
            aria-labelledby="data-individual-tab"
            >
            <h3>
              <strong>
                Placeholder Project 1 |{" "}
                  Code
              </strong>
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
              This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
            </p>
            <br />
            <hr />
            <br />
            <h3>
              <strong>
                Placeholder Project 2 |{" "}
                  Code
              </strong>
            </h3>
            <p class="text-sm text-black dark:text-gray-400">
              This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress. 
            </p>
            <br />
            <hr />
            <br />
          </div>
        </>
    )
}