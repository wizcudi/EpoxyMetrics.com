export default function GuaranteeStrip() {
  const items = [
    "100% Refundable Deposit",
    "Confirmed Sale in 30 Days or Your Money Back",
    "Performance-Only Commission",
    "Fully Done For You",
  ];

  return (
    <div className="bg-goldPale border-t-2 border-b-2 border-gold px-[5%] py-3.5 flex items-center justify-center gap-9 flex-wrap font-brand">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-[13px] font-semibold text-navy">
          <div className="w-[7px] h-[7px] bg-gold rounded-full flex-shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}
