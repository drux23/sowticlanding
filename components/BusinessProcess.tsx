import { useState } from "react";
import { CheckCircle, Search, Target, Zap, Users, TrendingUp } from "lucide-react";

const timelineSteps = [
  {
    id: 1,
    icon: Search,
    title: "Entendimiento del Proceso del Cliente",
    description: "Analizamos a profundidad los procesos actuales del cliente para identificar oportunidades de mejora y optimización.",
    color: "from-primary to-[#8b5cf6]"
  },
  {
    id: 2,
    icon: Target,
    title: "Diseño de Solución Estratégica",
    description: "Desarrollamos una estrategia tecnológica personalizada que se alinea perfectamente con los objetivos del negocio.",
    color: "from-primary to-[#8b5cf6]"
  },
  {
    id: 3,
    icon: Zap,
    title: "Desarrollo Ágil con Enfoque en Valor",
    description: "Implementamos metodologías ágiles priorizando las funcionalidades que generan mayor valor al cliente.",
    color: "from-primary to-[#8b5cf6]"
  },
  {
    id: 4,
    icon: Users,
    title: "Implementación Operativa",
    description: "Ejecutamos la puesta en marcha trabajando de la mano con el equipo del cliente para garantizar una adopción exitosa.",
    color: "from-primary to-[#8b5cf6]"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Optimización y Evolución del Proceso",
    description: "Monitoreamos continuamente el impacto y evolucionamos la solución para maximizar el ROI y la eficiencia operativa.",
    color: "from-primary to-[#8b5cf6]"
  }
];

export function BusinessProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [sequentialActive, setSequentialActive] = useState<number[]>([]);

  const handleMouseEnter = (stepId: number) => {
    setHoveredStep(stepId);
    
    // Check if it's sequential hover (left to right)
    const stepIndex = stepId - 1;
    const allPreviousHovered = Array.from({ length: stepIndex }, (_, i) => i + 1);
    
    // If hovering from left to right, activate sequential mode
    if (stepIndex === 0 || sequentialActive.includes(stepId - 1)) {
      setSequentialActive([...allPreviousHovered, stepId]);
    } else {
      // Independent hover - reset sequential and only show current
      setSequentialActive([]);
    }
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);
    // Keep sequential active if user was hovering sequentially
  };

  const resetSequential = () => {
    setSequentialActive([]);
    setHoveredStep(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Business Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            No solo es entregar software, sino transformar procesos reales del cliente con soluciones que impactan directamente en la operación, la eficiencia y la estrategia
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-7xl mx-auto" onMouseLeave={resetSequential}>
          {/* Main Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-[#8b5cf6]/30 to-primary/20 transform -translate-y-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary via-[#8b5cf6] to-primary transform -translate-y-1/2 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: sequentialActive.length > 0 
                ? `${(Math.max(...sequentialActive) / timelineSteps.length) * 100}%` 
                : hoveredStep ? `${(hoveredStep / timelineSteps.length) * 100}%` : '0%'
            }}
          />

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              const isSequentialActive = sequentialActive.includes(step.id);
              const isActive = isHovered || isSequentialActive;
              
              return (
                <div
                  key={step.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(step.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Timeline Node */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      {/* Outer Ring - Stroke más delgado */}
                      <div 
                        className={`
                          w-20 h-20 rounded-full border-2 transition-all duration-500 ease-out
                          ${isActive 
                            ? 'border-[#8b5cf6] bg-gradient-to-br from-primary/20 to-[#8b5cf6]/20 scale-110' 
                            : 'border-muted bg-background'
                          }
                          ${isHovered ? 'shadow-2xl' : ''}
                        `}
                        style={isHovered ? {
                          boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)'
                        } : {}}
                      />
                      
                      {/* Inner Icon Container */}
                      <div 
                        className={`
                          absolute inset-1 rounded-full flex items-center justify-center transition-all duration-500 ease-out
                          ${isActive 
                            ? `bg-gradient-to-br ${step.color} text-white transform rotate-12` 
                            : 'bg-muted text-muted-foreground'
                          }
                        `}
                      >
                        <Icon 
                          className={`
                            w-7 h-7 transition-all duration-500 ease-out
                            ${isHovered ? 'scale-125' : ''}
                          `} 
                        />
                      </div>

                      {/* Ripple Effect */}
                      {isHovered && (
                        <div 
                          className="absolute inset-0 rounded-full border-2 animate-ping" 
                          style={{
                            borderImage: 'linear-gradient(45deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.4)) 1'
                          }}
                        />
                      )}

                      {/* Step Number */}
                      <div 
                        className={`
                          absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-sm font-bold transition-all duration-300
                          ${isActive 
                            ? 'bg-primary text-white' 
                            : 'bg-muted text-muted-foreground'
                          }
                        `}
                      >
                        {isActive ? <CheckCircle className="w-4 h-4" /> : step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content Card - Ajustado para 5 columnas */}
                  <div 
                    className={`
                      bg-card border rounded-2xl p-4 transition-all duration-500 ease-out transform h-72 flex flex-col
                      ${isHovered 
                        ? 'border-primary/30 shadow-2xl shadow-primary/10 -translate-y-2 scale-105' 
                        : 'border-border hover:border-primary/20'
                      }
                    `}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`font-bold transition-colors duration-300 text-sm ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Card Description - Optimizado para 5 columnas */}
                    <p className="text-muted-foreground leading-relaxed flex-1 text-xs mb-3">
                      {step.description}
                    </p>

                    {/* Gradient Accent */}
                    <div 
                      className={`
                        h-1 rounded-full transition-all duration-500 ease-out
                        ${isHovered 
                          ? `bg-gradient-to-r ${step.color} opacity-100` 
                          : 'bg-muted opacity-50'
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline Progress Indicator */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {timelineSteps.map((step) => (
                <div
                  key={step.id}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${(sequentialActive.includes(step.id) || step.id === hoveredStep)
                      ? 'bg-gradient-to-r from-primary to-[#8b5cf6] scale-125' 
                      : 'bg-muted-foreground/30'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}