
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    description: string;
    price: string;
  }[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-sm border">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="carousel-item object-contain h-48 w-48 p-4"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <h3 className="font-medium text-gray-800">
                {images[currentIndex].description}
              </h3>
              <p className="text-red-600 font-semibold mt-1">
                {images[currentIndex].price}
              </p>
              <button className="mt-2 bg-red-600 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition-colors">
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={previous}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Produto anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Próximo produto"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex
                ? "bg-red-600"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Ir para produto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
