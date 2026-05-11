export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Automated Health Score Monitoring
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Never Miss a Restaurant<br />Health Inspection Score
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically track health department inspection scores for all your restaurant locations. Get instant email and SMS alerts the moment a score changes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Monitoring — $6/mo
        </a>
        <div className="mt-6 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Automated scraping</span>
          <span>✓ Email &amp; SMS alerts</span>
          <span>✓ All locations</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$6<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Monitor up to 25 locations</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily automated score checks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Score history &amp; trends</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Multi-user access</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the monitoring work?</h3>
            <p className="text-[#8b949e] text-sm">We automatically scrape your local health department website daily. When a new inspection score is posted or an existing score changes, you receive an instant email and SMS alert with the details.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which cities and states are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support hundreds of health departments across the US. Enter your restaurant address during setup and we'll confirm coverage. New jurisdictions are added regularly based on customer requests.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I monitor multiple locations?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The Pro plan supports up to 25 restaurant locations under one account. Franchise operators and food service companies can monitor their entire portfolio from a single dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} Restaurant Health Score Monitor. All rights reserved.</p>
      </footer>
    </main>
  );
}
