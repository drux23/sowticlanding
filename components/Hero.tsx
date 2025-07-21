import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useRef } from "react";
import exampleImage from 'figma:asset/64ec96670a3d2f1ff54fe7748e834d7d3aa4a6e3.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={exampleImage} 
          alt="Astronauta explorando nuevos horizontes" 
          className="w-full h-full object-cover brightness-110 contrast-105"
        />
        {/* Overlay más sutil para mantener la imagen visible */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Gradiente más suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
        {/* Gradiente radial para enfocar el centro */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl">
            Soluciones tecnológicas para{" "}
            impulsar{" "}
            tus proyectos
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Descubre una plataforma revolucionaria que te llevará más allá de los límites. 
            Cada aventura comienza con un solo paso hacia lo extraordinario.
          </p>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botón primario */}
            <Button 
              size="lg" 
              onClick={() => onNavigate?.("servicios")}
              className="text-lg px-8 py-6 h-14 bg-gradient-to-r from-[#3488E7] to-[#1D70B7] hover:from-[#2A7BD4] hover:to-[#165A9E] text-white border-0 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm relative flex items-center justify-center min-w-[180px] cursor-pointer"
            >
              <span className="flex-1 text-center">Explorar</span>
              <ArrowRight className="absolute right-6 h-5 w-5" />
            </Button>
            
            {/* Botón secundario con liquid glass interactivo */}
            <div
              ref={buttonRef}
              className="relative min-w-[180px]"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-14 bg-transparent border border-white/10 text-white hover:border-white/20 shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-700 relative flex items-center justify-center w-full overflow-hidden group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
              >
              {/* Interactive liquid glass ripple */}
              {isHovered && (
                <div 
                  className="absolute w-32 h-32 pointer-events-none transition-all duration-300 ease-out"
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)`,
                    borderRadius: '50%',
                    animation: 'liquidPulse 1.5s ease-out infinite'
                  }}
                />
              )}
              
              {/* Mouse-following wave distortion */}
              {isHovered && (
                <div 
                  className="absolute w-40 h-40 pointer-events-none transition-all duration-500 ease-out"
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: 'translate(-50%, -50%) scale(0.8)',
                    background: `conic-gradient(from ${mousePos.x * 3.6}deg, transparent 0%, rgba(255,255,255,0.08) 10%, transparent 20%, rgba(255,255,255,0.04) 30%, transparent 40%)`,
                    borderRadius: '50%',
                    animation: 'liquidRotate 3s linear infinite'
                  }}
                />
              )}
              
              {/* Interactive wave trails */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <div 
                  className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 ease-out"
                  style={{
                    top: `${mousePos.y}%`,
                    transform: `translateY(-50%) skewX(${(mousePos.x - 50) * 0.5}deg)`,
                    opacity: isHovered ? 0.4 : 0
                  }}
                />
                <div 
                  className="absolute w-1 h-full bg-gradient-to-b from-transparent via-white/8 to-transparent transition-all duration-700 ease-out"
                  style={{
                    left: `${mousePos.x}%`,
                    transform: `translateX(-50%) skewY(${(mousePos.y - 50) * 0.3}deg)`,
                    opacity: isHovered ? 0.3 : 0
                  }}
                />
              </div>
              
              {/* Liquid surface tension effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                <div 
                  className="absolute w-24 h-24 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    left: `${mousePos.x}%`,
                    top: `${mousePos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(ellipse ${100 + Math.sin(Date.now() * 0.01) * 20}% ${100 + Math.cos(Date.now() * 0.01) * 20}%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
                    animation: 'liquidBreathe 2s ease-in-out infinite'
                  }}
                />
              </div>
              
              {/* Fixed liquid droplets */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-5 left-8 w-0.5 h-0.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
                <div className="absolute top-7 right-10 w-1 h-1 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '2.8s'}} />
                <div className="absolute bottom-7 left-12 w-0.5 h-0.5 bg-white/18 rounded-full animate-bounce" style={{animationDelay: '1.6s', animationDuration: '3.2s'}} />
                <div className="absolute bottom-5 right-8 w-0.5 h-0.5 bg-white/22 rounded-full animate-bounce" style={{animationDelay: '2.4s', animationDuration: '2.6s'}} />
              </div>
              
              {/* Reactive border glow */}
              <div 
                className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  boxShadow: `0 0 15px rgba(255,255,255,${isHovered ? 0.15 : 0}), inset 0 0 15px rgba(255,255,255,${isHovered ? 0.05 : 0})`
                }}
              />
              
                <span className="flex-1 text-center relative z-10 group-hover:text-white transition-colors duration-500">Contacto</span>
                <Mail className="absolute right-6 h-5 w-5 relative z-10 group-hover:scale-110 transition-all duration-500" />
              </Button>
            </div>
          </div>
          
          {/* Floating badge con mejor contraste */}
          <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl hover:bg-white/25 transition-all duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-sm text-white drop-shadow">
              Más de 100 exploradores tecnológicos nos recomiendan
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      
      {/* Subtle light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Interactive liquid glass animations */}
      <style>{`
        @keyframes liquidPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        @keyframes liquidRotate {
          0% { transform: translate(-50%, -50%) scale(0.8) rotate(0deg); }
          100% { transform: translate(-50%, -50%) scale(0.8) rotate(360deg); }
        }
        
        @keyframes liquidBreathe {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
        }
        
        @keyframes liquidShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}