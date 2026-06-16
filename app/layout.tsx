import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Your favorite note-taking site)",
  openGraph: {
    title: "NoteHab",
    description: "Your favorite note-taking site)",
    url: "https://notehub.vercel.app",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const Layout = ({ children, modal }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
};

export default Layout;
