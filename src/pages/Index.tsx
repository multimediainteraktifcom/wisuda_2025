import { useSearchParams } from "react-router-dom";
import { BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import Gallery from "@/components/Gallery";
import VenueMap from "@/components/VenueMap";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "";

  return (
    <div className="min-h-screen bg-background">
      <BackgroundMusic />
      
      {/* Hero Section with Quote */}
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {guestName && (
              <div className="mb-8">
                <p className="text-secondary text-xl font-medium">
                  Selamat Datang, {guestName}
                </p>
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hari Yang Telah Lama Dinantikan
            </h1>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <blockquote className="text-xl md:text-2xl italic leading-relaxed">
                "Pendidikan adalah senjata paling ampuh yang bisa Anda gunakan untuk mengubah dunia."
              </blockquote>
              <cite className="block mt-4 text-secondary font-medium">
                - Nelson Mandela
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <VenueMap />
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Tata Cara & Ketentuan
              </h3>
              <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="prose prose-lg max-w-none">
                <p className="text-text-secondary leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Terima Kasih
              </h4>
              <p className="text-white/80 mb-6">
                Kehadiran Anda sangat berarti bagi kami
              </p>
            </div>

            <div>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-xl"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Buku Wisuda
                </a>
              </Button>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-white/60 text-sm">
                © 2025 Universitas. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
