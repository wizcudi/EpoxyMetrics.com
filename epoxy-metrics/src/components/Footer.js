export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060E1A] px-[5%] py-7 flex items-center justify-between flex-wrap gap-3.5 border-t border-gold/12 font-brand">
      <div className="text-[16px] font-bold text-white/35 font-serif">
        Epoxy<span className="text-gold">Metrics</span>
      </div>
      <p className="text-[12px] text-white/22">
        &copy; {currentYear} Epoxy Metrics. All rights reserved.
      </p>
    </footer>
  );
}
