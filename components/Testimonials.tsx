import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      avatar: "MG",
      content: "Esta plataforma ha revolucionado completamente nuestra forma de trabajar. La experiencia del usuario es simplemente excepcional.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Producto",
      avatar: "CR",
      content: "Increíble atención al detalle y funcionalidades que realmente marcan la diferencia. Altamente recomendado.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, InnovateLab",
      avatar: "AM",
      content: "El mejor investimento que hemos hecho este año. Los resultados superaron todas nuestras expectativas.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de profesionales ya han transformado su trabajo con nuestra plataforma. 
            Descubre por qué confían en nosotros.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-base mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}