import Button from "./Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-2 sticky top-0 z-50 bg-lightColor ">
      <div className="max-w-6xl flex justify-between mx-auto items-center">
        {/* Logo scales slightly on mobile vs desktop */}
        <div className="font-bold cursor-pointer">
          <Image
            src="/images/Epoxy-Logo-No-Words.png"
            alt="Epoxy Metrics Logo"
            width={50}
            height={50}
            className=" object-contain "
          />
        </div>
        <Button href="#contact" variant="primary">
          Get More Leads
        </Button>
      </div>
    </nav>
  );
}