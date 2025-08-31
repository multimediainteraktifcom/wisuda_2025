import graduationCeremony from "@/assets/graduation-ceremony.jpg";
import graduationDiploma from "@/assets/graduation-diploma.jpg";
import graduationGroup from "@/assets/graduation-group.jpg";

const Gallery = () => {
  const images = [
    {
      src: graduationCeremony,
      alt: "Upacara Wisuda di Auditorium",
      title: "Upacara Wisuda"
    },
    {
      src: graduationDiploma,
      alt: "Diploma dan Toga Wisuda",
      title: "Diploma Kelulusan"
    },
    {
      src: graduationGroup,
      alt: "Foto Bersama Wisudawan",
      title: "Kebersamaan Wisudawan"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Galeri Wisuda
        </h3>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-smooth"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
              <h4 className="font-semibold text-lg">{image.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;