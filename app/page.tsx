export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Hiring
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Track New Hire Onboarding<br />
          <span className="text-[#58a6ff]">Completion Across Teams</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Real-time dashboard showing checklist completion, time-to-productivity metrics, and bottleneck identification — so every new hire gets up to speed faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg checklist completion</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Faster bottleneck detection</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">-40%</div>
            <div className="text-xs text-[#8b949e] mt-1">Time-to-productivity</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited new hires</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time onboarding dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Checklist completion tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Bottleneck identification</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Time-to-productivity metrics</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Team &amp; manager views</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this for?</h3>
            <p className="text-sm text-[#8b949e]">HR managers and team leads at growing companies who need visibility into new hire progress and want to reduce time-to-productivity across their teams.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does bottleneck identification work?</h3>
            <p className="text-sm text-[#8b949e]">The dashboard highlights checklist steps where new hires consistently stall, so you can intervene early, update processes, or reassign tasks before productivity suffers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel your subscription at any time with no penalties. Your data remains accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        &copy; {new Date().getFullYear()} Onboarding Tracker. All rights reserved.
      </footer>
    </main>
  )
}
