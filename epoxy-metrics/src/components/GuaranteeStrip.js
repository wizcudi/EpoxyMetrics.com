export default function GuaranteeStrip() {
  const items = [
    { icon: "◇", value: "30-Day Guarantee", label: "Booked appointments or your money back" },
    { icon: "△", value: "Live in Days", label: "Not weeks — answering calls fast" },
    { icon: "○", value: "Two Options", label: "Own it yourself or let us manage it" },
    { icon: "■", value: "Epoxy-Only", label: "Built for your trade, not generic" },
  ];

  return (
    <section className="py-12 border-t border-[#252B36] border-b border-b-[#252B36] bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i}>
              <div className="text-[1.4rem] mb-2">{item.icon}</div>
              <div className="font-bold text-[0.9rem] text-[#E8EAF0] mb-0.5">{item.value}</div>
              <div className="text-[0.78rem] text-[#5A6272]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
