import { useEffect, useState } from "react";
import Home from "./Page/Home";
import AboutPage from "./Page/AboutPage";
import ServicesPage from "./Page/ServicesPage";
import ResidentialPage from "./Page/ResidentialPage";
import CommercialPage from "./Page/CommercialPage";
import ContactPage from "./Page/ContactPage";
import QuotePage from "./Page/QuotePage";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const pageId = params.get("page_id");
      if (pageId === "628") {
        setPage("about");
      } else if (pageId === "13") {
        setPage("services");
      } else if (pageId === "1242") {
        setPage("residential");
      } else if (pageId === "1243") {
        setPage("commercial");
      } else if (pageId === "16") {
        setPage("contact");
      } else if (pageId === "1039") {
        setPage("quote");
      } else {
        setPage("home");
      }
    };

    // Initial check
    handleUrlChange();

    // Listen for browser navigation changes
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  return (
    <>
      {page === "about" && <AboutPage />}
      {page === "services" && <ServicesPage />}
      {page === "residential" && <ResidentialPage />}
      {page === "commercial" && <CommercialPage />}
      {page === "contact" && <ContactPage />}
      {page === "quote" && <QuotePage />}
      {page === "home" && <Home />}
    </>
  );
}

export default App;