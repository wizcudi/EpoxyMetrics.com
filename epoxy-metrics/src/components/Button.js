import Link from "next/link";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
    // Base styles
    const baseStyles = "cursor-pointer px-4 py-2 rounded-lg font-bold text-center transition-all duration-200 block";

    // Variant styles
    const variants = {
        primary: "bg-accentColor border-2 border-darkColor text-darkColor hover:bg-accentColorHover shadow-md",
        outline: "border-2 border-accentColor text-darkColor hover:bg-accentColor hover:border-darkColor shadow-md",
    };

    // Merge internal styles with any custom className passed in (like 'w-full')
    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    // MODE 1: It's a Link (if href exists)
    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    // MODE 2: It's a Button (for forms/actions)
    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}