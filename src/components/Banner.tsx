"use client";

import Image from "next/image";

export default function BannerSection() {
  return (
   <section className="w-full bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Banner Image */}
        <Image
          src="/banner.jpg"
          alt="Cancer Awareness Banner"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Awareness Saves Lives
          </h2>
          <p className="text-neutral-300">
            Early detection, education, and community support play a vital role
            in fighting cancer.
          </p>
        </div>

      </div>
    </section>
  );
}
