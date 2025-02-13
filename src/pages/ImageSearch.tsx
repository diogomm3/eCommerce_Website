
import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCarousel } from "@/components/ProductCarousel";

const mockProducts = [
  // ... same mock products as Index.tsx
];

const ImageSearch = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white p-4">
        <div className="container mx-auto max-w-4xl flex items-center">
          <Link to="/" className="text-white hover:text-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold text-center flex-1">Procura por Imagem</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl p-4">
        <div className="bg-white rounded-xl shadow-lg border p-4">
          <div className="mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="max-h-64 mx-auto"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="mt-4 text-red-600 hover:text-red-700"
                  >
                    Remover imagem
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    <span className="text-gray-600">
                      Clique para fazer upload de uma imagem
                    </span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            {selectedImage && (
              <button className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
                Procurar
              </button>
            )}
          </div>

          {selectedImage && (
            <>
              <ProductCarousel
                title="Resultados CLIP Model"
                products={mockProducts}
              />
              <ProductCarousel
                title="Resultados DINO-V2 Model"
                products={mockProducts}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSearch;
