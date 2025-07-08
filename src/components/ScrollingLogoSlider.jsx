const logos = [
  {
    url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    alt: "Python"
  },
  {
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    alt: "JavaScript"
  },
  {
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript"
  },
  {
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    alt: "React"
  },
  {
    url: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
    alt: "Next.js"
  },
  {
    url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    alt: "HTML5"
  },
  {
    url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    alt: "CSS3"
  },
  {
    url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "Tailwind CSS"
  },
  {
    url: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    alt: "Django"
  },
  {
    url: "https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
    alt: "SQL"
  },
  {
    url: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
    alt: "PostgreSQL"
  },
  {
    url: "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
    alt: "SQLite"
  },
  {
    url: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MongoDB"
  },
  {
    url: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
    alt: "Pandas"
  },
  {
    url: "https://img.shields.io/badge/SQLAlchemy-CA1F27?style=for-the-badge&logo=sqlalchemy&logoColor=white",
    alt: "SQLAlchemy"
  },
  {
    url: "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white",
    alt: "Microsoft Azure"
  },
  {
    url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    alt: "Git"
  },
  {
    url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
    alt: "GitHub"
  },
  {
    url: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white",
    alt: "VS Code"
  },
  {
    url: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    alt: "Postman"
  }
];

export const ScrollingLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-200 dark:bg-gray-800 py-2">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
           <img
            key={index}
            src={logo.url}
            alt={logo.alt}
            className="h-8 w-auto mx-4 object-contain"
          />
        ))}
      </div>
    </div>
  );
};