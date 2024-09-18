const logos = [
  "public/assets/HTML.png", "public/assets/CSS.png", "public/assets/JS.png", "public/assets/React.png", "public/assets/Node.js.png", "public/assets/Bootstrap.png", "public/assets/Tailwind.png", "public/assets/Python.png", "public/assets/Django.png", "public/assets/Git.png", "public/assets/GitHub.png"
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
