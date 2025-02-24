FinWise Ai – AI-Powered Finance Management Platform

FinWise Ai is a modern full-stack application that helps users take control of their personal finances using the power of AI. The platform provides budget tracking, expense analysis, and financial insights in a clean, intuitive interface.

Built with Next.js, Tailwind CSS, Prisma, Supabase, and Clerk authentication, the app integrates AI-driven features to deliver real-time analytics and smarter decision-making for everyday financial management.


✨ Features :

📊 Smart Expense Tracking – Log and categorize transactions effortlessly.
🤖 AI Insights – Get spending analysis, patterns, and personalized recommendations.
🔒 Secure Authentication – User login and signup powered by Clerk.
💾 Reliable Database – Supabase + Prisma for seamless data storage and queries.
📧 Email Integration – Notifications and updates via Resend API.
⚡ Serverless Workflows – Inngest & ArcJet to handle automation and protection.
🎨 Modern UI – Beautiful interface styled with Tailwind CSS + shadcn UI.


🛠️ Tech Stack :

Frontend: Next.js (App Router), Tailwind CSS, shadcn UI
Backend: Prisma ORM, Supabase
Authentication: Clerk
AI Integration: Gemini API
Workflow & Security: Inngest, ArcJet
Email Service: Resend API

1. Clone the repository
git clone https://github.com/tejastn1211/FinWise_AI.git
cd FinWise_AI

2. Install dependencies :
npm install

3. Setup environment variables
Create a .env file in the root folder and add the following keys:

DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=

4. Run the development server : 
npm run dev


Future Enhancements :
Integration with real bank APIs for live transaction imports
AI-powered savings & investment suggestions
Multi-currency support
Advanced data visualization dashboards

Screenshots:
<img width="1893" height="847" alt="Screenshot 2025-09-09 201815" src="https://github.com/user-attachments/assets/93b4d1f0-9940-4bcf-aca8-e75fba7c692c" />

<img width="1892" height="858" alt="Screenshot 2025-09-09 201852" src="https://github.com/user-attachments/assets/2a954506-6bd4-48a6-9f42-8a43231c850d" />

<img width="1896" height="864" alt="Screenshot 2025-09-09 201915" src="https://github.com/user-attachments/assets/112287f3-05e7-47ea-803e-9188b89e42df" />

<img width="1876" height="482" alt="Screenshot 2025-09-09 202151" src="https://github.com/user-attachments/assets/4ff6b150-246b-4783-abe5-6869597ad6a7" />




This project is built for educational and portfolio purposes.
