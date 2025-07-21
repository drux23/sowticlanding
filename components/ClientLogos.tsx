import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const clientLogos = [
  {
    id: 1,
    name: "Defensa al Consumidor - Buenos Aires",
    src: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "Defensa al Consumidor Buenos Aires"
  },
  {
    id: 2,
    name: "OPC",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "OPC"
  },
  {
    id: 3,
    name: "IPS",
    src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "IPS"
  },
  {
    id: 4,
    name: "UOM",
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "Unión Obrera Metalúrgica"
  },
  {
    id: 5,
    name: "INDRA",
    src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "INDRA"
  },
  {
    id: 6,
    name: "Prismalogic",
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "Prismalogic"
  },
  {
    id: 7,
    name: "Somosierra Tech",
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "Somosierra Tech"
  },
  {
    id: 8,
    name: "GL Group",
    src: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "GL Group"
  },
  {
    id: 9,
    name: "Iderotech",
    src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=80&q=80",
    alt: "Iderotech"
  }
];

export function ClientLogos() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Duplicar los logos para crear un scroll infinito
    const firstLogosSet = carousel.children[0] as HTMLElement;
    const clonedLogosSet = firstLogosSet.cloneNode(true) as HTMLElement;
    carousel.appendChild(clonedLogosSet);

    // Configurar animación automática lenta
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Velocidad muy lenta para buena accesibilidad
    const maxScroll = firstLogosSet.scrollWidth;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    // Pausar en hover para accesibilidad
    const handleMouseEnter = () => {
      carousel.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      carousel.style.animationPlayState = 'running';
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Clientes que Confían en{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestras Soluciones
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Organizaciones líderes que han transformado sus procesos tecnológicos con nosotros
          </p>
        </div>

        {/* Floating Logos Carousel */}
        <div className="relative">
          {/* Gradient overlays for seamless scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex items-center gap-16 w-max"
              style={{ willChange: 'transform' }}
            >
              {/* First set of logos */}
              <div className="flex items-center gap-16">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className="group relative flex-shrink-0"
                  >
                    {/* Floating container with glassmorphism */}
                    <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-700 group-hover:bg-card/50 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/10">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Logo container */}
                      <div className="relative w-40 h-16 flex items-center justify-center">
                        <ImageWithFallback
                          src={logo.src}
                          alt={logo.alt}
                          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                        />
                        
                        {/* Overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-lg" />
                      </div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                      
                      {/* Floating particles effect */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{animationDelay: '0s'}} />
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{animationDelay: '0.3s'}} />
                    </div>
                    
                    {/* Company name tooltip */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-1 shadow-lg">
                        <span className="text-xs text-foreground whitespace-nowrap">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-foreground/80">
              +50 empresas confían en nuestras soluciones tecnológicas
            </span>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/3 right-16 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute top-2/3 left-1/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
    </section>
  );
}