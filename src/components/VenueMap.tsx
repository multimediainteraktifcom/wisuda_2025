import { MapPin, Clock, Calendar } from "lucide-react";

const VenueMap = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Lokasi Acara
        </h3>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-medium">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Tempat</h4>
                <p className="text-text-primary font-medium">
                  Gedung Sasana Budaya Ganesha
                </p>
                <p className="text-text-secondary">
                  Institut Teknologi Bandung<br />
                  Jl. Ganesha No. 10, Bandung
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Tanggal</h4>
                <p className="text-text-primary font-medium">
                  Sabtu, 27 September 2025
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Waktu</h4>
                <p className="text-text-primary font-medium">
                  08:00 - 12:00 WIB
                </p>
                <p className="text-text-secondary text-sm">
                  Mohon hadir tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl p-6 shadow-medium">
          <div className="aspect-video bg-muted rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0546738769366!2d107.60847531474773!3d-6.893055694996896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sSasana%20Budaya%20Ganesha!5e0!3m2!1sen!2sid!4v1625547811234!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Sasana+Budaya+Ganesha+ITB+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth text-sm font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueMap;