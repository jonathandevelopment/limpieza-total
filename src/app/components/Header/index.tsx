export default function Hero() {
    return (
      <header className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Izquierda: Información de la empresa */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Limpieza Total</h1>
            <p className="text-xl text-gray-700 mb-6">Productos de limpieza premium para tu hogar y vehículo.</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
            >
              Conoce nuestros productos
            </a>
          </div>
          {/* Derecha: Imagen */}
          <div>
            <img
              src="/images/limpieza-total.webp"
              alt="Limpieza Total productos"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </header>
    );
  }
  