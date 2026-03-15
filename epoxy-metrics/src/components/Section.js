export default function Section({ children, id, variant = "light", wide = false }) {
    const baseStyles = "w-full px-[5%] py-16 md:py-[90px]";

    const variants = {
        light: "",
        accent: "bg-accentColor",
        dark: "bg-darkColor",
        main: "bg-mainColor",
        navy: "bg-navy",
        offWhite: "bg-offWhite",
    };

    const innerClass = wide
        ? "max-w-[1200px] mx-auto"
        : "max-w-[1200px] mx-auto flex flex-col gap-7";

    return (
        <section id={id} className={`${baseStyles} ${variants[variant]}`}>
            <div className={innerClass}>
                {children}
            </div>
        </section>
    );
}
