
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
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
    <div className="relative w-full max-w-2xl mx-auto my-4 h-64">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl glass-morphism">
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="carousel-item object-contain h-full w-full p-4"
        />
      </div>
      
      <button
        onClick={previous}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass-morphism hover:bg-white/40 dark:hover:bg-black/40 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass-morphism hover:bg-white/40 dark:hover:bg-black/40 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex
                ? "bg-primary"
                : "bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
