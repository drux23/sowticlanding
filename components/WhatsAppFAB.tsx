import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const handleWhatsAppClick = () => {
    // Cambia este número por tu número de WhatsApp real (incluye código de país)
    const phoneNumber = "1234567890";
    const message = "Hola, me interesa conocer más sobre sus servicios de SOWTIC";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Contáctanos por WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
      </div>
    </button>
  );
}