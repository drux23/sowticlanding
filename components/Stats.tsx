import { Card, CardContent } from "./ui/card";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "1M+",
      label: "Exploradores Activos",
      description: "Usuarios navegando nuevos horizontes digitales"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "150+",
      label: "Países Alcanzados",
      description: "Presencia global en todos los continentes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      number: "99.9%",
      label: "Tiempo de Actividad",
      description: "Disponibilidad confiable las 24/7"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "500%",
      label: "Crecimiento Anual",
      description: "Expansión constante y sostenida"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Números que{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Hablan por Sí Solos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada métrica representa el impacto real que estamos generando en el universo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/30 bg-card/50 backdrop-blur-sm hover:bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 text-primary group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-primary transition-all duration-500">
                    {stat.number}
                  </span>
                </div>
                
                <h3 className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
              
              {/* Efecto de borde animado */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px' }}>
                <div className="w-full h-full bg-card rounded-lg"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}