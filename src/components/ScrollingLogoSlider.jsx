const logos = [
  "/assets/HTML.png", "/assets/CSS.png", "/assets/JS.png", "/assets/React.png", "/assets/Node.js.png", "/assets/Bootstrap.png", "/assets/Tailwind.png", "/assets/Python.png", "/assets/Django.png", "/assets/Git.png", "/assets/GitHub.png"
];

export const ScrollingLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-200 dark:bg-gray-800 py-2">
      <div className="flex animate-scroll">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Tech logo ${index + 1}`}
            className="h-20 w-auto mx-8 object-contain"
          />
        ))}
      </div>
    </div>
  );
};