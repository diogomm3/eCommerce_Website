
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  itemsPerView?: number;
}

export const ProductCarousel = ({ title, products, itemsPerView = 5 }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      Math.min(current + itemsPerView, products.length - itemsPerView)
    );
  };

  const previous = () => {
    setCurrentIndex((current) => Math.max(current - itemsPerView, 0));
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  const canGoNext = currentIndex + itemsPerView < products.length;
  const canGoPrevious = currentIndex > 0;

  return (
    <div className="relative w-full mb-8">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[calc(100%/${itemsPerView})] bg-white rounded-xl shadow-sm border p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
              <p className="text-red-600 font-semibold mb-4">{product.price}</p>
              <div className="flex flex-col gap-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-colors">
                  Adicionar
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-full text-sm hover:bg-red-50 transition-colors">
                  Ver Produto
                </button>
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
      </div>
    </div>
  );
};
