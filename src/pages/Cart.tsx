
import { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItem } from "@/types/product";

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Água Luso",
    price: "0.48€",
    image: "/placeholder.svg",
    quantity: 2
  },
  // Add more mock items as needed
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white p-4">
        <div className="container mx-auto max-w-4xl flex items-center">
          <Link to="/" className="text-white hover:text-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold text-center flex-1">Carrinho</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl p-4">
        <div className="bg-white rounded-xl shadow-lg border p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              O seu carrinho está vazio
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-4 border rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-red-600 font-semibold">{item.price}</p>
                    <p className="text-sm text-gray-500">
                      Quantidade: {item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="text-red-600 hover:text-red-700 px-4 py-2 rounded-full border border-red-600 hover:bg-red-50 transition-colors">
                      Ver Produto
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full border hover:bg-gray-50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
