const PricingSection = () => {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-6">
          Choose Your Scale Phase
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20">
          Engagements are designed around where your business is now — and what
          needs to be installed next for reliable growth in 2026.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* BUILD */}
          <div className="rounded-2xl border border-white/10 p-10 bg-black">
            <h3 className="text-2xl font-semibold text-white mb-1">BUILD</h3>
            <p className="text-gray-400 mb-10">install fit</p>

            <p className="text-sm text-gray-400 mb-2">
              Target →{" "}
              <span className="text-white font-semibold">$20k/month</span>
            </p>

            <div className="text-2xl font-semibold text-cyan-400 mb-10">
              $2k<span className="text-sm font-normal text-gray-400"> / month</span>
            </div>

            <h4 className="text-sm tracking-widest text-gray-500 mb-4">
              MILESTONE
            </h4>
            <p className="text-gray-300 mb-10">
              Achieve message-to-brain fit → real PMF signal.
            </p>

            <h4 className="text-sm tracking-widest text-gray-500 mb-4">
              WHAT CHANGES
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ People “get it” instantly</li>
              <li>✓ First profitable demand loop appears</li>
              <li>✓ Wasteful testing stops</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-white/20 py-3 text-white hover:bg-white/5 transition">
              Let’s Talk
            </button>
          </div>

          {/* SCALE */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-400/60 to-transparent">
            <div className="rounded-2xl bg-black p-10 h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-semibold text-white mb-1">SCALE</h3>
              <p className="text-gray-400 mb-10">install economics</p>

              <p className="text-sm text-gray-400 mb-2">
                Target →{" "}
                <span className="text-white font-semibold">$100k/month</span>
              </p>

              <div className="text-2xl font-semibold text-cyan-400 mb-10">
                $5k<span className="text-sm font-normal text-gray-400"> / month</span>
              </div>

              <h4 className="text-sm tracking-widest text-gray-500 mb-4">
                MILESTONE
              </h4>
              <p className="text-gray-300 mb-10">
                Achieve cost economics that allow reliable scale.
              </p>

              <h4 className="text-sm tracking-widest text-gray-500 mb-4">
                WHAT CHANGES
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>✓ CAC stabilises</li>
                <li>✓ Margin becomes predictable</li>
                <li>✓ You can push budget without fear</li>
              </ul>

              <button className="mt-10 w-full rounded-xl bg-cyan-400 py-3 text-black font-semibold hover:bg-cyan-300 transition">
                LET’S TALK
              </button>
            </div>
          </div>

          {/* DOMINATE */}
          <div className="rounded-2xl border border-white/10 p-10 bg-black">
            <h3 className="text-2xl font-semibold text-white mb-1">DOMINATE</h3>
            <p className="text-gray-400 mb-10">
              install exponential scale
            </p>

            <p className="text-sm text-gray-400 mb-2">
              Target →{" "}
              <span className="text-white font-semibold">$500k+/month</span>
            </p>

            <div className="text-2xl font-semibold text-cyan-400 mb-10">
              $10k<span className="text-sm font-normal text-gray-400"> / month</span>
            </div>

            <h4 className="text-sm tracking-widest text-gray-500 mb-4">
              MILESTONE
            </h4>
            <p className="text-gray-300 mb-10">
              Neuro precision embedded across touchpoints → scale becomes
              self-sustaining.
            </p>

            <h4 className="text-sm tracking-widest text-gray-500 mb-4">
              WHAT CHANGES
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Revenue and profit compound</li>
              <li>✓ Messaging propagates across brand + channels</li>
              <li>✓ Dependency on external partners drops</li>
            </ul>

            <button className="mt-10 w-full rounded-xl border border-white/20 py-3 text-white hover:bg-white/5 transition">
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

