import css from "./LayoutNotes.module.css";

interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>

      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
};

export default Layout;
