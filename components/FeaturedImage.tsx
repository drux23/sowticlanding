import { Card, CardContent } from "./ui/card";
import exampleImage from 'figma:asset/64ec96670a3d2f1ff54fe7748e834d7d3aa4a6e3.png';

export function FeaturedImage() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={exampleImage} 
            alt="Astronauta explorando nuevos horizontes" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl md:text-2xl mb-2">Explorando Nuevos Horizontes</h3>
            <p className="text-sm text-white/90 max-w-md">
              Cada proyecto es una aventura hacia territorios inexplorados. Sigamos construyendo el futuro juntos.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}