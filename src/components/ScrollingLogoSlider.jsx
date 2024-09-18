const logos = [
  "src/assets/HTML.png", "src/assets/CSS.png", "src/assets/JS.png", "src/assets/React.png", "src/assets/Node.js.png", "src/assets/Bootstrap.png", "src/assets/Tailwind.png", "src/assets/Python.png", "src/assets/Django.png", "src/assets/Git.png", "src/assets/GitHub.png"
];

export const ScrollingLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 dark:bg-gray-800 py-2">
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
