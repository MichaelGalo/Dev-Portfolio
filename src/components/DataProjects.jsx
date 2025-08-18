import { useState } from "react";

export const DataProjects = () => {
  const [activeTab, setActiveTab] = useState("data-capstone"); 

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); 
  };

  return (
    <>
      {/* Tabs Section */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-styled-tab"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "data-capstone" ? "text-purple-600 border-purple-600" : ""
              }`}
              id="data-capstone-styled-tab"
              type="button"
              role="tab"
              aria-controls="data-capstone"
              aria-selected={activeTab === "data-capstone"}
              onClick={() => handleTabClick("data-capstone")}
            >
              Data Engineering Capstone
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "data-group" ? "text-purple-600 border-purple-600" : ""
              }`}
              id="data-group-styled-tab"
              type="button"
              role="tab"
              aria-controls="data-group"
              aria-selected={activeTab === "data-group"}
              onClick={() => handleTabClick("data-group")}
            >
              Group Projects
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "data-individual" ? "text-purple-600 border-purple-600" : ""
              }`}
              id="data-individual-styled-tab"
              type="button"
              role="tab"
              aria-controls="data-individual"
              aria-selected={activeTab === "data-individual"}
              onClick={() => handleTabClick("data-individual")}
            >
              Individual Projects
            </button>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div id="default-styled-tab-content">
        {/* Data Capstone Tab Content */}
        <div
          className={`p-4 rounded-lg bg-gray-200 dark:bg-gray-800 ${
            activeTab === "data-capstone" ? "" : "hidden"
          }`}
          id="styled-data-capstone"
          role="tabpanel"
          aria-labelledby="data-capstone-tab"
        >
          <h3>
            <strong>
              NSS Data Engineering Capstone: Orbital (under development)
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            This section is intentionally reserved for upcoming project details and portfolio expansions. I am actively developing new applications and refining current ideas to better reflect my evolving skill set. Information about these future projects, including technical overviews, challenges tackled, and deployed links, will be featured here. Please check back soon for updates as this area will grow alongside my experience. Until then, thank you for visiting and taking the time to explore my work in progress.
          </p>
        </div>

        {/* Data Group Tab Content */}
        <div
          className={`p-4 rounded-lg bg-gray-200 dark:bg-gray-800 ${
            activeTab === "data-group" ? "" : "hidden"
          }`}
          id="styled-data-group"
          role="tabpanel"
          aria-labelledby="data-group-tab"
        >
          <h3>
            <strong>
              Marvan Multi-National Covid-19 Data Pipeline (dbt/Prefect) |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/marvan-covid-data-pipeline-prefect"
              >
                Pipeline Code
              </a>{" "}
              |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/marvan-covid-api"
              >
                API Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            A production-ready data engineering pipeline that orchestrates the ingestion, transformation, and delivery of COVID-19 open datasets from multiple national sources using contemporary ELT patterns and a medallion architecture. This project was refactored from an earlier version that used Airflow, and now leverages Prefect for orchestration to extend my learning. The pipeline extracts data from various APIs, transforms it into a unified format, and loads it into a Snowflake data warehouse. The final output is a set of clean, structured datasets ready for analysis and reporting from FastAPI endpoints.
            <br />
            <br />
            <strong>Project Goals:</strong> Medallion data architecture, exploring basic data lakehouse in Snowflake, dbt, Prefect, FastAPI, Swagger Docs, CI/CD Github Actions workflows, Exploratory Data Analysis (EDA) in Jupyter notebooks and object storage in MinIO. This project was also an exercise in managing stakeholder expectations with due to vague requirements and shifting priorities.
          </p>
          <br />
          <hr className="border-t-2 border-gray-500 dark:border-gray-300" />
          <br />
          <h3>
            <strong>
              NPPES National Healthcare Analytics (Serverless ELT Data Pipeline) |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/NPPES_Data_Cleaning_Pipeline"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            This project focused on integrating and enriching healthcare provider data from multiple sources to support geographic and demographic analysis. We extracted key provider details and enhanced them with taxonomy classifications from a lookup file. We ingested the full national dataset into a PostgreSQL database using a pagination, stored procedures and linked providers to U.S. counties by cross-referencing ZIP codes with mapping files and U.S. Census population data. The final output was a cleaned, structured dataset for analysis and Excel reporting, supported by a presentation covering architecture, challenges, and key decisions.
            <br />
            <br />
            <strong>Project Goals:</strong> This project aimed to teach data integration across heterogeneous sources into a unified Postgres database. Tools used included Docker, Postman, SQLAlchemy, Pandas, and the U.S. Census API.
          </p>
          <br />
          <hr className="border-t-2 border-gray-500 dark:border-gray-300" />
          <br />
          <h3>
            <strong>
              Jannell's Car Sales (Legacy ETL Pipeline) |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/jannells-car-sales"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            This project involved integrating data from multiple sources into a PostgreSQL database to support stakeholder analysis. Using the provided API documentation and business requirements, we created tables to store client data retrieved from an external API. We then connected a secondary dataset from a CSV file. After transforming, loading and combining the two sources of data, we queried the database to extract key insights. We delivered an Excel report that addressed the outlined business needs. Our final presentation covered architectural decisions, challenges faced, and lessons learned.
            <br />
            <br />
            <strong>Project Goals:</strong> The primary aim for this project was to learn how to gather data from multiple sources into a unified database, regardless of the original format. We learned how to use Postgres, Docker, Postman, Pandas and SQLAlchemy.
          </p>
        </div>

        {/* Data Individual Tab Content */}
        <div
          className={`p-4 rounded-lg bg-gray-200 dark:bg-gray-800 ${
            activeTab === "data-individual" ? "" : "hidden"
          }`}
          id="styled-data-individual"
          role="tabpanel"
          aria-labelledby="data-individual-tab"
        >
          <h3>
            <strong>
              Marvan Multi-National Covid-19 Data Pipeline (duckdb/ducklake) |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/marvan-covid-pipeline-ducklake"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            A production-ready data engineering pipeline that orchestrates the ingestion, transformation, and delivery of COVID-19 open datasets from multiple national sources using modern ELT patterns and a medallion architecture. This project was refactored from a earlier versions that used Airflow/Prefect & dbt, and now leverages DuckDB & Ducklake to extend my learning. The pipeline extracts data from various APIs, transforms it into a unified format, and loads it into a ducklake data warehouse. The final output is a set of clean, structured datasets ready for analysis and reporting from FastAPI endpoints.
            <br />
            <br />
            <strong>Project Goals:</strong> Refactor existing data pipeline using bleeding edge modern tech stack & advanced data lakehouse data architecture. Utilizing DuckDB & Ducklake created a highly efficient and cost-effective data processing solution, without sacrificing performance. It also allowed for a consolidated project repo combining the data warehouse, full pipeline and api.
          </p>
          <br />
          <hr className="border-t-2 border-gray-500 dark:border-gray-300" />
          <br />
          <h3>
            <strong>
              Data Pipeline Project Scripts |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/data-engineering-pipeline-scripts"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            A collection of reusable scripts and utilities for building and managing data pipelines, focusing on adaptability to legacy, contemporary, modern and neutral data architectures. These allow for rapid development and deployment of data workflows across various environments. The scripts include boilerplate code, package managers, code linting and formatting, testing framework, and deployment automation.
            <br />
            <br />
            <strong>Project Goals:</strong> Exercise in building Bash scripts to automate common data pipeline project tasks. It was an attempt to personalize a data architecture and tools framework for various paradigms of data architecture.
          </p>
          <br />
          <hr className="border-t-2 border-gray-500 dark:border-gray-300" />
          <br />
          <h3>
            <strong>
              HTTP-Triggered Azure Serverless Pipeline Function |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/azure-postgres-pipeline"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            This project implements an ELT data pipeline using an Azure Function App in Python to automate the movement and transformation of data between Azure Blob Storage and a PostgreSQL database. It extracts CSV files from Azure, loads them into Postgres, performs transformations via stored procedures, and exports the cleaned data as Excel files back to Azure. Key components include Azure Functions, Pandas, Docker for local Postgres setup, and SQL-based transformation logic, enabling scalable cloud-based data workflows in a modern data engineering context.
          </p>
          <br />
          <hr className="border-t-2 border-gray-500 dark:border-gray-300" />
          <br />
          <h3>
            <strong>
              SFTP to Postgres Data Migration |{" "}
              <a
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://github.com/MichaelGalo/DE-Lab-1-9-moving-data-from-sftp-to-postgresql"
              >
                Code
              </a>
            </strong>
          </h3>
          <p className="text-sm text-black dark:text-gray-400">
            This project automated the process of transferring CSV data from a secure SFTP server into a PostgreSQL database using Python. The script established a secure SFTP connection, uploaded and downloaded files, parsed the CSV data, and inserted the records into a target table using SQLAlchemy. Key technologies included Python, SQLAlchemy, pysftp, and environment variable management with dotenv. This workflow streamlined data migration and demonstrated best practices for secure file transfer and database integration in a data engineering context.
          </p>
        </div>
      </div>
    </>
  );
};