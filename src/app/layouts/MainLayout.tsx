import { Outlet } from "react-router";
import FigmaHeader from "../../imports/Container-32-255";
import { Footer } from "../components/Footer";
import lotusBg from "figma:asset/2ddad1b0821068d4ba93eb21c46081f77bc59471.png";

export function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        position: "relative",
      }}
    >
      {/* === Global lotus background - covers entire page === */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${lotusBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center -200px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.35,
          zIndex: 0,
        }}
      />
      {/* Warm overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,250,240,0.6) 0%, rgba(255,248,235,0.4) 40%, rgba(255,245,230,0.45) 70%, rgba(255,250,240,0.65) 100%)",
          zIndex: 0,
        }}
      />

      {/* Figma Header - pixel-perfect */}
      <div className="relative" style={{ zIndex: 1 }}>
        <FigmaHeader />
      </div>

      {/* Main Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Outlet />
      </div>

      {/* Footer */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Footer />
      </div>
    </div>
  );
}
