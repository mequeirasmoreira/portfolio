import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ProjectsProvider } from "./contexts/ProjectsContext";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Miqueias S. Moreira | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Miqueias S. Moreira, desenvolvedor Full Stack especializado em React, Node.js e TypeScript. Conheça meus projetos e experiências.",
  keywords: [
    "desenvolvedor full stack",
    "react",
    "node.js",
    "typescript",
    "next.js",
    "portfolio",
    "desenvolvimento web",
  ],
  authors: [{ name: "Miqueias S. Moreira" }],
  creator: "Miqueias S. Moreira",
  publisher: "Miqueias S. Moreira",
  robots: "index, follow",
  alternates: {
    canonical: "https://portfolio-mequeiras-projects.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-mequeiras-projects.vercel.app/",
    title: "Miqueias S. Moreira | Desenvolvedor Full Stack",
    description:
      "Portfólio profissional de Miqueias S. Moreira, desenvolvedor Full Stack especializado em React, Node.js e TypeScript.",
    siteName: "Portfólio Miqueias S. Moreira",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miqueias S. Moreira - Desenvolvedor Full Stack",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${urbanist.variable} antialiased dark:bg-zinc-950 bg-slate-100 text-white font-urbanist transition duration-200 ease-in-out`}
      >
        <ProjectsProvider>{children}</ProjectsProvider>
      </body>
    </html>
  );
}
