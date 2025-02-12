
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top banner */}
      <div className="bg-red-700 text-white text-sm py-1 text-center">
        Entregas grátis em compras acima de 60€
      </div>

      {/* Main header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          {/* Upper header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Menu className="h-6 w-6 lg:hidden" />
              <h1 className="text-2xl font-bold">Continente Online</h1>
            </div>

            {/* Search bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="O que procura?"
                  className="w-full py-2 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* User actions */}
            <div className="flex items-center gap-6">
              <button className="hidden lg:flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>Entrar</span>
              </button>
              <button className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden lg:inline">Carrinho</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden lg:flex py-2">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-700">
                  Mercearia
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <div>
                      <h3 className="font-medium mb-2">Mercearia Doce</h3>
                      <ul className="space-y-2">
                        <li>Bolachas</li>
                        <li>Cereais</li>
                        <li>Chocolates</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Mercearia Salgada</h3>
                      <ul className="space-y-2">
                        <li>Arroz</li>
                        <li>Massa</li>
                        <li>Conservas</li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-700">
                  Bebidas
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-700">
                  Frescos
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-red-700">
                  Congelados
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero banner */}
        <div className="mb-8">
          <img
            src="/placeholder.svg"
            alt="Promoções da semana"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Categories grid */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Categorias em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="product-card">
                <img
                  src="/placeholder.svg"
                  alt={`Categoria ${i + 1}`}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="font-medium">Categoria {i + 1}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Products grid */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Produtos em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} className="product-card">
                <img
                  src="/placeholder.svg"
                  alt={`Produto ${i + 1}`}
                  className="w-full h-48 object-contain p-4"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">Marca</div>
                  <h3 className="font-medium mb-2">Produto {i + 1}</h3>
                  <div className="text-red-600 font-semibold">€9.99</div>
                  <button className="continente-button w-full mt-4">
                    Adicionar
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Apoio ao Cliente</h3>
              <ul className="space-y-2 text-sm">
                <li>Contactos</li>
                <li>Ajuda</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm">
                <li>Cartão Continente</li>
                <li>Lojas</li>
                <li>Campanhas</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sobre Nós</h3>
              <ul className="space-y-2 text-sm">
                <li>Quem Somos</li>
                <li>Trabalhe Connosco</li>
                <li>Sustentabilidade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Siga-nos</h3>
              <ul className="space-y-2 text-sm">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            © 2024 Continente Online. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
