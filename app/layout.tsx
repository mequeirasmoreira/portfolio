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
  title: "Create Next App",
  description: "Generated by create next app",
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
        <ProjectsProvider>
          {children}
        </ProjectsProvider>
      </body>
    </html>
  );
}
