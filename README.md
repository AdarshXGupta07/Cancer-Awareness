🌸 Cancer Awareness & Support Platform

A modern, interactive web platform built to spread cancer awareness, provide emotional support, and inspire users through thoughtful design, smooth animations, and meaningful content.

🚀 Overview

This project is designed with one clear goal: to inform, inspire, and emotionally support users.
Cancer-related topics are sensitive, so the website focuses on a calm, clean, and respectful user experience while still feeling modern and engaging.

From the hero section to dynamic inspirational quotes, every part of the site is carefully planned to guide the user smoothly and positively.

🧠 Thought Process & Design Philosophy

Clarity first: The hero section immediately explains the purpose of the website.

Emotion-aware UI: Soft gradients, subtle animations, and meaningful visuals help build trust and comfort.

Minimal but powerful: No clutter, only essential information with impact.

Dynamic content: Quotes refresh automatically or via a button to keep the experience fresh.

User flow: Awareness → Inspiration → Engagement.

🧩 Key Features

✨ Interactive Hero Section with animated background effects

🎯 Banner image aligned with the hero for a single-screen experience

💬 Dynamic inspirational quotes (refresh or button-based)

🎥 Smooth animations using Framer Motion

🌗 Responsive and accessible UI

⚡ Fast performance with Next.js

🎨 Clean styling with Tailwind CSS

🔁 API-based data fetching

🛠 Tech Stack
Technology	Why It Was Used
Next.js	Fast rendering, routing, and API routes
React	Component-based, reusable UI
Tailwind CSS	Rapid, consistent, and responsive styling
Framer Motion	Smooth and professional animations
Aceternity UI	Advanced animated UI components
TypeScript	Type safety and better code quality
API Routes	Fetch dynamic content like quotes
📁 Project Structure
cancer-awareness/
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── quotes/
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── background-ripple.tsx
│   │   │   ├── card-hover-effect.tsx
│   │   │   └── spotlight.tsx
│   │   │
│   │   ├── AwarenessSection.tsx
│   │   ├── Banner.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Quotes.tsx
│   │
│   └── lib/
│       └── utils.ts
│
├── .gitignore
├── .nvmrc
├── components.json
├── eslint.config.mjs
├── netlify.toml
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── README.md
🖼 Banner Image Usage

Banner images are stored in the /public/images folder

Imported using Next.js Image component for optimization

Positioned inside the hero layout to stay visible on the first screen

🔄 Quotes Flow

Quotes are fetched from a custom API route (/api/quotes)

A “New Quote” button triggers re-fetching

Page refresh also loads a new quote

Proper loading and error handling included

🧪 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/project-name.git

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Open in browser
http://localhost:3000

📌 Future Improvements

Add user stories or survivor experiences

Expand awareness sections with verified resources

Add accessibility enhancements

Deploy with CI/CD

Add analytics for engagement tracking

🙌 Final Note

This project represents my approach to building meaningful products, not just visually appealing websites.
It combines strong frontend engineering, thoughtful UX, and real-world purpose, reflecting my growth as a developer who cares about both technology and people.