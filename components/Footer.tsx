import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-4">
            <h3 className="font-medium">Empresa</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Acerca de</div>
              <div>Blog</div>
              <div>Carreras</div>
              <div>Prensa</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Soporte</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Centro de Ayuda</div>
              <div>Documentación</div>
              <div>Contacto</div>
              <div>Comunidad</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Privacidad</div>
              <div>Términos</div>
              <div>Cookies</div>
              <div>Licencias</div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} SOWTIC. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <div>Twitter</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
          </div>
        </div>
      </div>
    </footer>
  );
}