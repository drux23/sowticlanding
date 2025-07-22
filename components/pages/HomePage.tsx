import { Hero } from "../Hero";
import { BusinessProcess } from "../BusinessProcess";
import { ClientLogos } from "../ClientLogos";
import { Features } from "../Features";
import { Testimonials } from "../Testimonials";
import { CallToAction } from "../CallToAction";
import { TeamCarousel } from "../TeamCarousel";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section with Image */}
      <Hero onNavigate={onNavigate} />

      {/* Servicios principales - Primera sección después del Hero */}
      <Features />

      {/* Team Carousel - Entre secciones B y D */}
      <TeamCarousel />

      {/* Business Process Timeline */}
      <BusinessProcess />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
}
