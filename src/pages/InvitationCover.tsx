import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import graduationHero from "@/assets/graduation-hero.jpg";

const InvitationCover = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    // Get guest name from URL parameters (e.g., ?to=hazel)
    const toParam = searchParams.get("to");
    if (toParam) {
      setGuestName(toParam);
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    navigate(`/invitation?to=${guestName}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${graduationHero})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Floating Decorations */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-secondary rounded-full float-animation opacity-60" />
        <div className="absolute top-32 right-16 w-6 h-6 bg-secondary-light rounded-full float-animation opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-secondary rounded-full float-animation opacity-50" style={{ animationDelay: '4s' }} />
        
        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Graduation Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Undangan Wisuda
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          {/* Personal Greeting */}
          {guestName && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-white/90 text-lg md:text-xl mb-2">
                Kepada Yth.
              </p>
              <p className="text-secondary text-2xl md:text-3xl font-semibold capitalize">
                {guestName}
              </p>
            </div>
          )}

          {/* Invitation Message */}
          <div className="space-y-4">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Dengan penuh sukacita, kami mengundang Anda untuk hadir dalam
            </p>
            <p className="text-secondary text-xl md:text-2xl font-semibold">
              Acara Wisuda Universitas
            </p>
          </div>

          {/* Envelope Button */}
          <div className="pt-8">
            <Button
              onClick={handleOpenInvitation}
              size="lg"
              className="envelope-bounce bg-secondary hover:bg-secondary-dark text-primary font-semibold px-8 py-4 rounded-2xl shadow-glow transition-bounce group"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-smooth" />
              Buka Undangan
            </Button>
          </div>

          {/* Bottom Decoration */}
          <div className="pt-12">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <div className="w-2 h-2 bg-secondary/60 rounded-full" />
              <div className="w-2 h-2 bg-secondary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCover;