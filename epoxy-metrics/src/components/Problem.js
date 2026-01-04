export default function Problem() {
  return (
    <section className="w-full bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The "Black Hole" Marketing Problem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="font-bold text-xl mb-3">Wasted Ad Budget</h3>
            <p className="text-gray-600">You spend $2,000/month on Facebook ads, but you have no idea which specific ad actually brought in the customer.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">📉</div>
            <h3 className="font-bold text-xl mb-3">Untracked Leads</h3>
            <p className="text-gray-600">Customers call you or fill out forms, but without a Pixel, Facebook thinks those ads failed, so it stops showing them.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-4xl mb-4">🤷‍♂️</div>
            <h3 className="font-bold text-xl mb-3">Zero Data Ownership</h3>
            <p className="text-gray-600">Relying on "boost posts" means you are renting an audience. We help you build your own data asset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}