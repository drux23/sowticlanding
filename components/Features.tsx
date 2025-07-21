import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Bot, Shield, Server, Glasses, CheckCircle, ArrowRight, Zap, Users, Target } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export function Features() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Agentes IA",
      description: "Automatizamos la atención comercial, de soporte técnico y operaciones con asistentes virtuales",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      fullDescription: "Transformamos la experiencia de atención al cliente mediante agentes de inteligencia artificial avanzados que pueden manejar consultas complejas, procesar información en tiempo real y brindar respuestas personalizadas las 24 horas del día.",
      features: [
        "Atención al cliente automatizada 24/7",
        "Procesamiento de lenguaje natural avanzado", 
        "Integración con sistemas CRM existentes",
        "Análisis de sentimientos en tiempo real",
        "Escalamiento inteligente a agentes humanos"
      ],
      benefits: [
        "Reducción de costos operativos hasta 60%",
        "Mejora en tiempo de respuesta del 90%",
        "Aumento en satisfacción del cliente",
        "Disponibilidad continua sin interrupciones"
      ]
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Ciberseguridad",
      description: "Realizamos auditorías e implementamos capacitación del ecosistema operativo",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      fullDescription: "Protegemos tu infraestructura digital con soluciones de ciberseguridad integrales que incluyen evaluaciones de vulnerabilidades, implementación de protocolos de seguridad y capacitación especializada para tu equipo.",
      features: [
        "Auditorías de seguridad completas",
        "Implementación de protocolos de seguridad",
        "Monitoreo continuo de amenazas",
        "Capacitación en ciberseguridad",
        "Plan de respuesta a incidentes"
      ],
      benefits: [
        "Protección proactiva contra amenazas",
        "Cumplimiento de normativas de seguridad",
        "Reducción de riesgos operacionales",
        "Equipo capacitado en buenas prácticas"
      ]
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Infraestructura",
      description: "Gestionamos entornos virtualizados y realizamos migraciones a nuevas tecnologías",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      fullDescription: "Optimizamos y modernizamos tu infraestructura tecnológica con soluciones de virtualización, migración a la nube y arquitecturas escalables que se adaptan al crecimiento de tu negocio.",
      features: [
        "Virtualización de servidores y aplicaciones",
        "Migración a cloud (AWS, Azure, Google Cloud)",
        "Arquitecturas escalables y resilientes",
        "Monitoreo y mantenimiento proactivo",
        "Optimización de rendimiento"
      ],
      benefits: [
        "Reducción de costos de infraestructura",
        "Mayor flexibilidad y escalabilidad",
        "Mejora en disponibilidad del sistema",
        "Backup y recuperación automatizada"
      ]
    },
    {
      icon: <Glasses className="h-10 w-10" />,
      title: "Realidad Aumentada",
      description: "Incorporamos estrategias de realidad aumentada para operaciones comerciales",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/10 to-pink-500/10",
      fullDescription: "Revolucionamos la experiencia comercial y operativa mediante tecnologías de realidad aumentada que permiten visualizaciones inmersivas, capacitación interactiva y presentaciones innovadoras de productos.",
      features: [
        "Aplicaciones AR para marketing y ventas",
        "Visualización 3D de productos",
        "Capacitación inmersiva con AR",
        "Mantenimiento asistido por AR",
        "Experiencias interactivas para clientes"
      ],
      benefits: [
        "Aumento en engagement del cliente",
        "Reducción de errores en capacitación",
        "Diferenciación competitiva",
        "Mejora en comprensión de productos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Explora nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas especializadas diseñadas para transformar 
            y optimizar la operación de tu proyecto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={index} open={selectedService === index} onOpenChange={(open) => setSelectedService(open ? index : null)}>
              <DialogTrigger asChild>
                <Card className="relative group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 bg-card/80 backdrop-blur-lg border-0 overflow-hidden hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
                  {/* Multiple Glow Layers */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-3xl`} />
                  <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 rounded-2xl`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-lg transition-all duration-700 rounded-xl`} />
                  
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Enhanced Glassmorphism effect */}
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Radial glow from center */}
                  <div className={`absolute inset-0 bg-gradient-radial from-transparent via-transparent to-transparent group-hover:from-${service.gradient.split(' ')[0].replace('from-', '')}/20 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="flex justify-center mb-6">
                      <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.bgGradient} border-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-lg group-hover:shadow-2xl`}>
                        {/* Multiple Icon glow effects */}
                        <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700`} />
                        <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`} />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-700`} />
                        
                        {/* Icon with enhanced effects */}
                        <div className={`relative text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all duration-500 drop-shadow-2xl group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                          {service.icon}
                        </div>
                        
                        {/* Pulsing effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 group-hover:animate-pulse transition-all duration-700`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3 text-foreground group-hover:text-white group-hover:drop-shadow-lg transition-colors duration-500 relative z-20">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-6 relative z-10 px-6 pb-6">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 group-hover:drop-shadow-md transition-colors duration-500 relative z-20">
                      {service.description}
                    </CardDescription>
                    
                    <div className="relative group/button">
                      {/* Enhanced container for better visibility */}
                      <div className="absolute inset-0 bg-card/90 backdrop-blur-md rounded-lg group-hover:bg-card/60 transition-all duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500`} />
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full bg-transparent hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 text-foreground hover:text-white border border-border/30 hover:border-white/30 transition-all duration-500 group-hover:shadow-xl backdrop-blur-sm hover:scale-105 relative z-10 font-medium"
                      >
                        <span className="relative z-10 drop-shadow-lg">Ver más</span>
                      </Button>
                    </div>
                  </CardContent>
                  
                  {/* Outer glow ring - no border, just glow */}
                  <div className={`absolute -inset-[3px] rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-r ${service.gradient} blur-sm`} />
                  
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]`} />
                </Card>
              </DialogTrigger>
              
              {/* Service Detail Modal */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border border-border/50">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.bgGradient} border-0`}>
                      <div className={`text-foreground/80 drop-shadow-2xl`}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-foreground">{service.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground text-base mt-2">
                        {service.fullDescription}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Features Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-foreground flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Características principales
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg text-foreground flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Beneficios clave
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                    >
                      <Users className="h-5 w-5 mr-2" />
                      Agendar consultoría
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-border/50 hover:bg-muted/50 text-foreground hover:text-foreground"
                    >
                      Descargar información
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}