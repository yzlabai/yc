import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YC - AI Detect & Deep Research Agent | Nano Banana Innovation with DeepSeek",
  description: "Revolutionary AI detect technology for deep research and nano banana-scale innovation. Powered by advanced DeepSeek algorithms, YC transforms your research capabilities with intelligent AI assistance.",
  keywords: "AI detect, deep research, nano banana, deepseek, artificial intelligence, research agent, innovation, AI technology, intelligent research, data analysis",
  authors: [{ name: "Yzlab AI" }],
  creator: "Yzlab AI",
  publisher: "Yzlab AI",
  robots: "index, follow",
  openGraph: {
    title: "YC - AI Detect & Deep Research Agent | Nano Banana Innovation",
    description: "Revolutionary AI detect technology for deep research and nano banana-scale innovation. Powered by DeepSeek algorithms.",
    type: "website",
    locale: "en_US",
    siteName: "YC - AI Research Agent",
  },
  twitter: {
    card: "summary_large_image",
    title: "YC - AI Detect & Deep Research Agent",
    description: "Revolutionary AI detect technology for deep research and nano banana-scale innovation.",
    creator: "@yzlabai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "YC - AI Detect & Deep Research Agent",
    "description": "Revolutionary AI detect technology for deep research and nano banana-scale innovation. Powered by DeepSeek algorithms.",
    "applicationCategory": "ResearchApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Yzlab AI"
    },
    "keywords": "AI detect, deep research, nano banana, deepseek, artificial intelligence, research agent"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
