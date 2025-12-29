"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AwarenessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const awarenessItems = [
    {
      title: "Early Detection",
      description: "Learn to recognize the early signs and symptoms of breast cancer. Early detection significantly increases treatment success rates and survival outcomes. Regular self-exams and mammograms are crucial preventive measures.",
      link: "/early-detection",
    },
    {
      title: "Awareness",
      description: "Stay informed about breast cancer facts, risk factors, and prevention strategies. Our awareness campaigns aim to educate communities and reduce stigma through evidence-based information.",
      link: "/awareness",
    },
    {
      title: "Support & Care",
      description: "Access comprehensive support services including counseling, patient navigation, and caregiver resources. We provide emotional, practical, and medical support throughout every stage of the journey.",
      link: "/support-care",
    },
    {
      title: "Community",
      description: "Join our network of survivors, caregivers, and advocates. Participate in support groups, events, and volunteer opportunities to connect with others and make a meaningful difference.",
      link: "/community",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Focus Areas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Four pillars of our mission to fight breast cancer through education, 
            support, early detection, and community engagement.
          </p>
        </div>

        {/* 2x2 Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awarenessItems.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-600/20 to-purple-600/20 block rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              
              {/* CHANGED: bg-black instead of bg-gray-900 */}
              <div className="relative rounded-2xl h-full w-full p-8 overflow-hidden bg-black border border-gray-800 group-hover:border-pink-500/50 transition-all duration-300 z-20">
                {/* Card Icon/Number */}
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="ml-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Card Title */}
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {item.title}
                </h2>

                {/* Card Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <span className="text-pink-400 text-sm font-semibold group-hover:text-pink-300 transition-colors flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-base">
            Hover over each card to see the interactive effect
          </p>
        </div>
      </div>
    </section>
  );
};