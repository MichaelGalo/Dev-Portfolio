import { ScrollingLogoSlider } from "./ScrollingLogoSlider";

export const TechStack = () => {
    return (
        <>
            <section id="tech" className="mb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md ">
                    <ScrollingLogoSlider />
                </div>
            </section>
        </>
    )
}