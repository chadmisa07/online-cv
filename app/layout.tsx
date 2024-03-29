import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Chad E. Misa - Software Engineer";
const description = `A passionate and innovative software engineer on a mission to
transform ideas into captivating digital experiences. With a blend of
creativity and technical prowess, I thrive in the ever-evolving
landscape of web development.`;

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/cv-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Front-end Developer, Software Engineer, React.JS, ReactJS, Next.js, NextJS, HTML, CSS, "
        />
        <meta name="author" content="Chad E. Misa"></meta>

        <meta property="og:url" content="https://chadmisa-cv.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/cv-img.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
