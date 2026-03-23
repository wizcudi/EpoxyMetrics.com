export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-[#252B36] text-center bg-[#0B0E11]">
      <p className="text-[0.8rem] text-[#5A6272]">
        &copy; {currentYear} Epoxy Metrics. All rights reserved.
      </p>
    </footer>
  );
}
