import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const Layout = ({ children, modal }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
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
