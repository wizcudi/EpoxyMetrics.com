export default function Section({ children, id, variant = "light" }) {
    // Base styles for every section
    // We use max-w-7xl to keep content from getting too wide on huge monitors
    const baseStyles = "w-full px-6 py-12 md:py-20 ";

    // Define background color variants based on your globals.css variables
    // Enforcing 60/30/10 rule: mainColor is the dominant background (60%)
    const variants = {
        light: "",
        accent: "bg-accentColor ",
        dark: "bg-darkColor ",
        main: "bg-mainColor ",
    };

    return (
        <section id={id} className={`${baseStyles} ${variants[variant]}`}>
            <div className="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl max-w-xl mx-auto flex flex-col gap-7 ">
                {children}
            </div>

        </section>
    );
}