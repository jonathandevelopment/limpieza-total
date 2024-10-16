export default function AboutUs() {
    return (
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          {/* Grid con dos columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda: Información sobre la empresa */}
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Sobre Limpieza Total</h2>
              <p className="text-lg text-gray-700 mb-4">
                En <strong>Limpieza Total</strong>, nos dedicamos a proporcionar productos de limpieza de alta calidad para tu hogar y vehículo.
                Con más de 10 años en el mercado, nuestra misión es ofrecer soluciones de limpieza eficaces, ecológicas y seguras para toda tu
                familia.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Creemos en la importancia de cuidar tanto tu hogar como el medio ambiente. Por eso, trabajamos con ingredientes sostenibles y
                fórmulas seguras para todos.
              </p>
              <p className="text-lg text-gray-700">
                Nuestro compromiso es ofrecer productos que no solo limpien, sino que también protejan la salud de tus seres queridos y el
                planeta.
              </p>
  
              {/* CTA dentro del bloque de la información */}
              <div className="mt-6">
                <a
                  href="/about"
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300"
                >
                  Conoce Más Sobre Nosotros
                </a>
              </div>
            </div>
  
            {/* Columna derecha: Formulario de contacto */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 text-center">Contáctanos</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">Nombre:</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu correo"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left mb-2 text-gray-700">Mensaje:</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu mensaje"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  