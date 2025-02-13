
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
  const itemsPerView = 2;

  const next = () => {
    setCurrentIndex((current) => 
      Math.min(current + 1, images.length - itemsPerView)
    );
  };

  const previous = () => {
    setCurrentIndex((current) => Math.max(current - 1, 0));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView);
  const canGoNext = currentIndex + itemsPerView < images.length;
  const canGoPrevious = currentIndex > 0;

  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[300px]">
      <div className="flex gap-4 justify-center items-center">
        {visibleImages.map((image, idx) => (
          <div
            key={currentIndex + idx}
            className="flex-1 relative bg-white rounded-xl shadow-sm border p-4"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-item object-contain h-48 w-full p-4"
            />
            <div className="text-center mt-4">
              <h3 className="font-medium text-gray-800">
                {image.description}
              </h3>
              <p className="text-red-600 font-semibold mt-1">
                {image.price}
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-colors">
                  Adicionar
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-50 transition-colors">
                  Ver Produto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {canGoPrevious && (
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Produtos anteriores"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {canGoNext && (
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Próximos produtos"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      )}

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: Math.ceil(images.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerView)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              Math.floor(currentIndex / itemsPerView) === index
                ? "bg-red-600"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Ir para grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
