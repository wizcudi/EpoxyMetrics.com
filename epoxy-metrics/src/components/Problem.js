export default function Problem() {
  return (
    <section className="w-full bg-light-dark py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Stop Playing "Marketing Manager" After Hours</h2>
        
        <div className="bg-light p-10 rounded-3xl shadow-lg border border-primary/10">
          <p className="text-2xl leading-relaxed text-gray-800">
            "You’re an epoxy expert, not a media buyer. Spending your nights 
            trying to 'fix' ads is exhausting and takes you away from what 
            actually makes you money: <strong>running your business and finishing floors.</strong>"
          </p>
          
          <div className="mt-10 pt-10 border-t border-gray-100 grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-bold text-primary mb-2">The Old Way:</h4>
              <ul className="space-y-2 text-sm">
                <li>❌ Spending 5+ hours a week in Ad Manager</li>
                <li>❌ Guessing which keywords actually work</li>
                <li>❌ Stressing over "technical" website updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">The Metric Way:</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ 100% focus on pouring high-end floors</li>
                <li>✅ A managed system that runs on autopilot</li>
                <li>✅ Clear, simple reports on your lead count</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}