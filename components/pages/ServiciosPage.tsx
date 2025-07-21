import { Features } from "../Features";
import { CallToAction } from "../CallToAction";
import { Shield, Cpu, Cloud, Eye } from "lucide-react";

export function ServiciosPage() {
  const services = [
    {
      icon: Cpu,
      title: "Agentes IA",
      description: "Desarrollamos agentes de inteligencia artificial personalizados que automatizan procesos complejos y mejoran la toma de decisiones en tu empresa.",
      features: ["Procesamiento de lenguaje natural", "Automatización inteligente", "Análisis predictivo", "Integración con sistemas existentes"]
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description: "Protegemos tu infraestructura digital con soluciones de ciberseguridad avanzadas y monitoreo continuo de amenazas.",
      features: ["Evaluación de vulnerabilidades", "Monitoreo 24/7", "Respuesta a incidentes", "Cumplimiento normativo"]
    },
    {
      icon: Cloud,
      title: "Infraestructura",
      description: "Diseñamos y gestionamos infraestructuras tecnológicas escalables y seguras para impulsar el crecimiento de tu negocio.",
      features: ["Arquitectura en la nube", "Migración de datos", "Optimización de rendimiento", "Backup y recuperación"]
    },
    {
      icon: Eye,
      title: "Realidad Aumentada",
      description: "Creamos experiencias inmersivas de realidad aumentada que transforman la forma en que tus clientes interactúan con tus productos.",
      features: ["Aplicaciones móviles AR", "Visualización 3D", "Training interactivo", "Marketing inmersivo"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section for Services */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Soluciones tecnológicas especializadas para transformar tu negocio y potenciar tu crecimiento digital
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-card border rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient Accent */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}