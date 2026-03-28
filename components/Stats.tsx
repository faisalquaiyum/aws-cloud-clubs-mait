export default function Stats() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-primary cloud-gradient p-12 rounded-[2rem] text-on-primary flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span className="material-symbols-outlined text-9xl">rocket_launch</span>
            </div>
            <h3 className="text-4xl font-headline font-black mb-4">READY FOR LIFT OFF?</h3>
            <p className="text-lg opacity-90 max-w-sm">
              Join over 50+ students from MAIT exploring the vast cloud stratosphere.
            </p>
          </div>
          <div className="bg-tertiary-container p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-on-tertiary-container">--</span>
            <span className="font-label uppercase font-bold text-on-tertiary-container mt-2">Workshops</span>
          </div>
          <div className="bg-secondary-container p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-on-secondary-container">--</span>
            <span className="font-label uppercase font-bold text-on-secondary-container mt-2">Projects</span>
          </div>
          <div className="bg-surface-container-high md:col-span-1 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center">
            <span className="text-6xl font-headline font-black text-primary">--</span>
            <span className="font-label uppercase font-bold text-on-surface-variant mt-2">Avg Rating</span>
          </div>
          <div className="md:col-span-3 bg-surface-container-highest p-12 rounded-[2rem] flex items-center gap-8">
            <div className="flex -space-x-4">
              <img
                className="w-16 h-16 rounded-full border-4 border-surface-container-highest"
                alt="Student profile 1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv9ipcpwvWErgq-EuR4oLFNn8Yw3ffACXZ6aEI6gNJjIukb5XwvVfvLzwhEXwVWOMKGl42aFeBD7HGKryzA3vqoJQPE54_n5YfDPg-HgMoU6OO8dI208o2pBJixG9anOf5nGM1rf4_L7cIR1HMdNxj4xtfzhjoxwv3Wp59O5DMWPxOgKFhQtxQddOh6rbN1ZXq02nDMRUG2ljcCbkJ6uq0LOK-hD8-JVoMIwC-VAYNTsAQdLeLzCPHqIoHd2OGhStO4X1qI7sA46PX"
              />
              <img
                className="w-16 h-16 rounded-full border-4 border-surface-container-highest"
                alt="Student profile 2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQn0vL07Brj-tac70g4qXyR78sTaLCwOpzG7bCsN-3XA7J4SI_usPgI3P94u4Pfm3TDOgcqkyJef_mf2Y-HmbQF1mQ4uGdJXypB51vuZGA-qu4JBwIrjRGUV-6gRoGgSc_E16nVY3zPSoFYC5_Q4IyWVbm3wrcguuNrJ62WtK4fqPas5OtlrGmRHlffcidqthppPKOYMsx2Apy1xBmaDCD6b6Xz7cwHh_V5fhtXLvfb9Y3bHD5CZ57Egd4AExCQgSaOOmEXG1nixiX"
              />
              <img
                className="w-16 h-16 rounded-full border-4 border-surface-container-highest"
                alt="Student profile 3"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzfBNk6Ez6P8pPEZcS97bTliH2a27F47EeIgb9ZYYhPYydx-qmnSsoL3xSNCeWLBQO447AG404uZv0MEvX1X1N4Dn0n45LWc-XumWeCTDxr0vMU3ax9BpfVX7nLFvpIvXMh2nR3OGxlxLKUYr_FI-8f57TDPP4TgmF45sw2Dev5XAPBoU8FWA_o0JhvqBJDlN77ZY6Ri9tYYqCfzOruCaENQfSTYUf6ysehb1KdupVq-g6OQmCTtU30MZQKMrpEoH3HZYXze4LToTO"
              />
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold border-4 border-surface-container-highest">
                +200
              </div>
            </div>
            <div>
              <p className="text-xl font-headline font-bold">"Best community for cloud growth in MAIT!"</p>
              <p className="text-on-surface-variant">Trusted by the next generation of builders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
