import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/pages/HomePage";
import { ServiciosPage } from "./components/pages/ServiciosPage";
import { QuienesSomosPage } from "./components/pages/QuienesSomosPage";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/WhatsAppFAB";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "servicios":
        return <ServiciosPage />;
      case "quienes-somos":
        return <QuienesSomosPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main>{renderCurrentPage()}</main>

      <Footer />

      {/* FAB de WhatsApp flotante */}
      <WhatsAppFAB />
    </div>
  );
}
