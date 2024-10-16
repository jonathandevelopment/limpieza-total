export default function Benefits() {
    return (
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Beneficios de Nuestros Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beneficio 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Aquí podrías poner un ícono */}
                <img src="/images/eco-friendly.webp" alt="Ecológico" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Ecológico</h3>
              <p className="text-center text-gray-300">
                Nuestros productos son amigables con el medio ambiente, hechos con ingredientes biodegradables.
              </p>
            </div>
  
            {/* Beneficio 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Aquí podrías poner un ícono */}
                <img src="/images/effective.webp" alt="Efectividad" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Alta Efectividad</h3>
              <p className="text-center text-gray-300">
                Limpieza garantizada y resultados visibles desde la primera aplicación.
              </p>
            </div>
  
            {/* Beneficio 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                {/* Aquí podrías poner un ícono */}
                <img src="/images/safe.webp" alt="Seguro" className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Seguro para tu Familia</h3>
              <p className="text-center text-gray-300">
                Fórmulas suaves y seguras, ideales para usar en cualquier ambiente del hogar.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  