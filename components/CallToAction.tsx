import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3488E7] to-[#1D70B7] text-primary-foreground relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            ¿Listo para comenzar a darle vida a tu proyecto?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Tu próximo gran paso es con nosotros a tu lado
          </p>
          <div className="flex justify-center">
            {/* Botón único de contacto */}
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 h-16 bg-white/20 backdrop-blur-md border-0 text-white hover:bg-white hover:text-black shadow-xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contáctanos
            </Button>
          </div>
          {/* Mensaje de confianza */}
          <p className="text-sm opacity-75 mt-6">
            Transformamos ideas en soluciones tecnológicas reales
          </p>
        </div>
      </div>
    </section>
  );
}