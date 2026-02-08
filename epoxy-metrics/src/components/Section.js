export default function Section({ children, id, variant = "light" }) {
    // Base styles for every section
    // We use max-w-7xl to keep content from getting too wide on huge monitors
    const baseStyles = "w-full px-6 py-12 md:py-20 ";

    // Define background color variants based on your globals.css variables
    const variants = {
        light: "bg-lightColor text-mainColor",
        accent: "bg-accentColor text-darkColor",
        dark: "bg-darkColor text-lightColor",
        main: "bg-mainColor text-lightColor border-b-3 border-t-2 border-accentColor",
    };

    return (
        <section id={id} className={`${baseStyles} ${variants[variant]}`}>
            <div className="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-xl mx-auto flex flex-col gap-10 ">
                {children}
            </div>

        </section>
    );
}