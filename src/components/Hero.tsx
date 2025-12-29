"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "../components/ui/spotlight-new";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Spotlight Background */}
      <Spotlight translateY={-300} duration={8} xOffset={120} />

      {/* Overlay (to soften background) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-screen w-full items-center justify-center px-6">
        <div className="w-full max-w-3xl text-center transform -translate-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Cancer Awareness & Support
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-neutral-300">
            Together, we spread awareness, inspire hope, and stand strong with
            those fighting cancer.
          </p>

          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-lg bg-pink-600 px-8 py-3 text-white transition hover:bg-pink-700 sm:w-auto">
              Get Support
            </button>

            <Link
              href="#contact"
              scroll={true}
              className="w-full rounded-lg border border-neutral-400 px-8 py-3 text-neutral-200 transition hover:bg-white hover:text-black sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
