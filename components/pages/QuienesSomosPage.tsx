import { Stats } from "../Stats";
import { Testimonials } from "../Testimonials";
import { CallToAction } from "../CallToAction";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export function QuienesSomosPage() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Transformar procesos empresariales a través de soluciones tecnológicas innovadoras que generen impacto real en la operación, eficiencia y estrategia de nuestros clientes."
    },
    {
      icon: Lightbulb,
      title: "Visión",
      description: "Ser la empresa líder en transformación digital, reconocida por crear soluciones que no solo cumplen con las expectativas, sino que redefinen el futuro de los negocios."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Innovación constante, colaboración estrecha con nuestros clientes, excelencia técnica y compromiso con resultados tangibles que impulsen el crecimiento sostenible."
    },
    {
      icon: Award,
      title: "Compromiso",
      description: "Garantizar que cada solución que desarrollamos se integre perfectamente con la operación existente y genere valor medible desde el primer día de implementación."
    }
  ];

  const team = [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      description: "15 años de experiencia liderando transformaciones digitales en empresas Fortune 500.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      description: "Experto en arquitecturas de software escalables y soluciones de inteligencia artificial.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "María López",
      role: "Head of Security",
      description: "Especialista en ciberseguridad con certificaciones internacionales en ethical hacking.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Diego Martínez",
      role: "Innovation Director",
      description: "Líder en investigación y desarrollo de tecnologías emergentes como AR/VR e IA.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Quiénes Somos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos un equipo de expertos apasionados por transformar ideas en soluciones tecnológicas que impulsan el futuro de los negocios
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl mb-6">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SOWTIC nació de la visión de crear un puente entre la tecnología avanzada y las necesidades reales de las empresas. 
              Fundada en 2020, hemos crecido desde un pequeño equipo de desarrolladores hasta convertirnos en una consultora 
              tecnológica integral que ha transformado más de 200 empresas en América Latina.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-card border rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profesionales especializados con años de experiencia en sus respectivas áreas, 
              unidos por la pasión de crear soluciones que marquen la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}