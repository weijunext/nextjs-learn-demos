import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Learn Demos",
  description: "Next.js Learn Demos by Weijunext",
  twitter: {
    card: "summary_large_image",
    title: "Author - weijunext",
    description: "Next.js Learn Demos by Weijunext",
    creator: "@weijunext",
  },
  metadataBase: new URL("https://weijunext.com"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Nav />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
