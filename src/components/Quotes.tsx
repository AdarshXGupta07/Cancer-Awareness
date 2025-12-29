"use client";

import { useEffect, useState } from "react";

interface Quote {
  q: string;
  a: string;
}

export default function QuotesSection() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/quotes");
      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setError("Failed to load quote. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading && !quote) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400">Loading inspiration...</p>
      </div>
    );
  }

  if (error && !quote) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <blockquote className="relative">
            <div className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              &ldquo;{quote?.q}&rdquo;
            </div>

            <footer className="text-lg text-pink-400 font-medium mb-8">
              — {quote?.a}
            </footer>

            {/* New Quote Button */}
            <button
              onClick={fetchQuote}
              disabled={loading}
              className="px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "New Quote"}
            </button>

            {/* Decorative Quotes */}
            <div className="absolute top-0 left-0 -mt-4 -ml-4 text-pink-500 opacity-20">
              <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="absolute bottom-0 right-0 -mb-4 -mr-4 text-pink-500 opacity-20">
              <svg
                className="h-16 w-16 transform rotate-180"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
