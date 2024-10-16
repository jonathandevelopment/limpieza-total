export default function FeaturedProducts() {
    const productos = [
      { id: 1, nombre: "Limpiador Multiusos", descripcion: "Limpia todas las superficies.", precio: "$15", imagen: "/images/limpiador.webp" },
      { id: 2, nombre: "Cera para Autos", descripcion: "Brillo duradero para tu vehículo.", precio: "$25", imagen: "/images/cera-auto.webp" },
      { id: 3, nombre: "Desinfectante", descripcion: "Elimina el 99.9% de bacterias.", precio: "$10", imagen: "/images/desinfectante.webp" },
      { id: 4, nombre: "Jabón Líquido", descripcion: "Fórmula suave y eficaz.", precio: "$8", imagen: "/images/jabon-liquido.webp" },
      { id: 5, nombre: "Shampoo para Autos", descripcion: "Limpieza profunda y brillo.", precio: "$12", imagen: "/images/shampoo-auto.webp" },
      { id: 6, nombre: "Cloro", descripcion: "Cloro de máxima pureza.", precio: "$6", imagen: "/images/cloro.webp" }
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map(producto => (
              <div key={producto.id} className="bg-white rounded-lg shadow-lg p-6">
                <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <p className="text-blue-600 font-bold mb-4">{producto.precio}</p>
                <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Ver Producto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  