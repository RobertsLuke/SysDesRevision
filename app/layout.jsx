import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Distributed Systems — Revision Hub",
  description: "MCQs, Flashcards & AI-Marked Short Answers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: set theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('ds-theme') || 'warm';
                document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-cream">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
