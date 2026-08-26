import Header from "./Header";
import Footer from "./Footer";

function CaseLayout({ children, className = "" }) {
  return (
    <>
      <Header />
      <main id="main" className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default CaseLayout;
