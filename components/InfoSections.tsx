import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Rocket, Shield, Zap, Users, Globe, Star, Compass, TrendingUp, Lock, CloudRain } from "lucide-react";

export function InfoSections() {
  const services = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Lanzamiento Rápido",
      description: "Despega tu proyecto en minutos, no meses. Nuestra plataforma optimizada te lleva al espacio digital.",
      badge: "Nuevo"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad Avanzada",
      description: "Protección de nivel enterprise para todas tus misiones espaciales digitales.",
      badge: "Enterprise"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Velocidad Extrema",
      description: "Rendimiento que supera la velocidad de la luz. Optimizado para la era digital.",
      badge: "Premium"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Colaboración Global",
      description: "Conecta equipos desde cualquier punto del universo. Trabajo remoto redefinido.",
      badge: "Popular"
    }
  ];

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Alcance Universal",
      description: "Expande tu presencia a galaxias inexploradas del mercado digital."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Calidad Estelar",
      description: "Estándares de calidad que brillan más que las estrellas más luminosas."
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Navegación Intuitiva",
      description: "Interfaces tan claras como el espacio profundo, fáciles de navegar."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Crecimiento Exponencial",
      description: "Crece a la velocidad de expansión del universo mismo."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Privacidad Total",
      description: "Tus datos más seguros que en un agujero negro."
    },
    {
      icon: <CloudRain className="h-6 w-6" />,
      title: "Ecosistema Completo",
      description: "Todo lo que necesitas en una sola constelación de herramientas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Servicios Principales */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Servicios Premium
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-[#3488E7] to-[#1D70B7] bg-clip-text text-transparent">
            Explora Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre las herramientas que te llevarán más allá de los límites conocidos del desarrollo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/30 bg-primary/5">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3488E7]/5 to-[#1D70B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
          ))}
        </div>

        {/* Características Adicionales */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl mb-4 text-foreground">
            Características que Marcan la Diferencia
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada característica diseñada para llevarte más lejos en tu viaje hacia el éxito digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}