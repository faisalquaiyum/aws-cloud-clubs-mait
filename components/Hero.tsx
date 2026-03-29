"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 lg:px-0">
      {/* === Atmospheric Background Layer === */}
      <div className="absolute inset-0 z-0">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #737780 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Blur Circle - Top Left */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(148, 204, 255, 0.15)" }}
        />
        {/* Blur Circle - Bottom Right */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "rgba(103, 186, 253, 0.12)" }}
        />
        {/* Blur Circle - Mid Accent */}
        <div
          className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(0, 53, 102, 0.06)" }}
        />
      </div>

      {/* === Main Content === */}
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 py-12 lg:py-0">
        {/* Left Column - Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Overline Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-label text-xs font-bold tracking-[0.15rem] uppercase transition-all duration-700 ease-out ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
              }`}
            style={{
              background: "rgba(205, 229, 255, 0.6)",
              color: "#001d32",
              backdropFilter: "blur(12px)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              rocket_launch
            </span>
            LEVEL UP YOUR CLOUD SKILLS
          </div>

          {/* Main Headline */}
          <h1
            className={`font-headline font-extrabold leading-[0.88] tracking-[-0.03em] transition-all duration-700 ease-out delay-100 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
              }`}
            style={{ color: "#191c1e" }}
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block">
              AWS{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #002041, #003566)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CLOUD
              </span>
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl block mt-1">
              CLUB MAIT.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-body transition-all duration-700 ease-out delay-200 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
              }`}
            style={{ color: "#43474f" }}
          >
            A community of students passionate about{" "}
            <strong style={{ color: "#002041" }}>Amazon Web Services</strong>. We
            organize workshops, hackathons, and cloud events to help members
            learn, grow, and build on the cloud.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ease-out delay-300 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
              }`}
          >
            {/* Primary CTA */}

            {/* Secondary CTA - Glassmorphic */}
            <a
              href="/events"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-label font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "rgba(224, 227, 229, 0.45)",
                color: "#002041",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(195, 198, 208, 0.25)",
              }}
            >
              Explore Events
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                explore
              </span>
            </a>
          </div>

          {/* Social Proof / Community Stat */}
          <div
            className={`flex items-center gap-3 justify-center lg:justify-start transition-all duration-700 ease-out delay-[400ms] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
              }`}
          >
            {/* Stacked Avatars */}
            <div className="flex -space-x-3">
              {[
                "bg-[#003566]",
                "bg-[#006399]",
                "bg-[#67bafd]",
                "bg-[#003a47]",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center`}
                >
                  <span className="material-symbols-outlined text-white text-sm">
                    person
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p
                className="font-label font-bold text-xs tracking-[0.1em] uppercase"
                style={{ color: "#002041" }}
              >
                +20 Members
              </p>
              <p
                className="text-xs font-body"
                style={{ color: "#737780" }}
              >
                Growing community
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Composition */}
        <div className="relative flex justify-center items-center">
          <div
            className={`relative w-full max-w-lg transition-all duration-1000 ease-out delay-200 ${isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
              }`}
          >
            {/* Main Hero Image Container */}
            <div
              className="relative w-full aspect-square rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: "#ffffff",
                boxShadow:
                  "0 4px 20px rgba(25, 28, 30, 0.04), 0 25px 60px rgba(0, 32, 65, 0.08)",
              }}
            >
              <Image
                src="/cloud-hero.png"
                alt="Minimal line-art illustration of cloud computing infrastructure with cloud outlines, sparkle stars, and tech icons"
                width={480}
                height={480}
                className="object-contain p-6"
                priority
              />
            </div>

            {/* === Floating Accent Cards === */}

            {/* Cloud Computing Card - Top Right */}
            <div
              className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 px-5 py-4 rounded-2xl animate-float"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(195, 198, 208, 0.2)",
                boxShadow:
                  "0 4px 20px rgba(25, 28, 30, 0.05), 0 10px 30px rgba(0, 32, 65, 0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #002041, #003566)",
                  }}
                >
                  <span className="material-symbols-outlined text-white text-xl">
                    cloud
                  </span>
                </div>
                <div>
                  <p
                    className="font-label font-bold text-[10px] tracking-[0.1em] uppercase"
                    style={{ color: "#737780" }}
                  >
                    Cloud Computing
                  </p>
                  <p
                    className="font-headline font-bold text-sm"
                    style={{ color: "#002041" }}
                  >
                    Scale Securely
                  </p>
                </div>
              </div>
            </div>

            {/* Database Card - Bottom Left */}
            <div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 px-4 py-3 rounded-2xl animate-float-delayed"
              style={{
                background: "rgba(255, 255, 255, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(195, 198, 208, 0.2)",
                boxShadow:
                  "0 4px 20px rgba(25, 28, 30, 0.05), 0 10px 30px rgba(0, 32, 65, 0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#003a47" }}
                >
                  <span className="material-symbols-outlined text-white text-xl">
                    database
                  </span>
                </div>
                <div>
                  <p
                    className="font-label font-bold text-[10px] tracking-[0.1em] uppercase"
                    style={{ color: "#737780" }}
                  >
                    Data Lakes
                  </p>
                  <p
                    className="font-headline font-bold text-sm"
                    style={{ color: "#002041" }}
                  >
                    Store & Analyze
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal/Code Card - Right Side */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 px-4 py-3 rounded-2xl animate-float-fast"
              style={{
                background: "rgba(0, 32, 65, 0.92)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(165, 200, 255, 0.15)",
                boxShadow:
                  "0 4px 20px rgba(25, 28, 30, 0.08), 0 15px 35px rgba(0, 32, 65, 0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                <div className="w-2 h-2 rounded-full bg-[#fecb00]" />
                <div className="w-2 h-2 rounded-full bg-[#4cd6fb]" />
              </div>
              <code
                className="text-xs font-mono block"
                style={{ color: "#94ccff" }}
              >
                <span style={{ color: "#4cd6fb" }}>$</span> aws configure
              </code>
              <code
                className="text-xs font-mono block mt-1"
                style={{ color: "#67bafd" }}
              >
                <span style={{ color: "#4cd6fb" }}>$</span> cloud-club init
                --mait
              </code>
            </div>

            {/* AWS Service Card - Top Left */}
            <div
              className="absolute top-4 -left-4 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center animate-float-fast"
              style={{
                background:
                  "linear-gradient(135deg, #006399, #67bafd)",
                boxShadow: "0 8px 24px rgba(0, 99, 153, 0.3)",
              }}
            >
              <span className="material-symbols-outlined text-white text-2xl">
                deployed_code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
