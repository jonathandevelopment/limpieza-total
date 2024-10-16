"use client"
import { useState } from 'react';

export default function SpecialOffers() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid con dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda: Información de la oferta y compras al por mayor */}
          <div>
            <h2 className="text-4xl font-bold mb-4">¡Ofertas Especiales para Compras al Por Mayor!</h2>
            <p className="text-xl mb-6">
              Aprovecha precios exclusivos para grandes pedidos y descuentos especiales en productos de Limpieza Total. ¡Compra más y ahorra más!
            </p>
            <p className="text-lg mb-6">
              Además, hacemos envíos a cualquier lugar de <strong>Costa Rica</strong>, asegurando que tus pedidos lleguen a tiempo y en perfectas condiciones.
            </p>
            <button
              onClick={toggleForm}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-200 transition duration-300"
            >
              Compras al Por Mayor
            </button>
          </div>

          {/* Columna derecha: Imagen de camión cargado de productos */}
          <div>
            <img
              src="/images/truck-loaded.webp"
              alt="Camión cargado de productos Limpieza Total"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Formulario emergente */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Formulario de Contacto</h3>
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
                  <label className="block text-left mb-2 text-gray-700">Cantidad de productos:</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Cantidad"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Enviar
                </button>
              </form>
              <button
                onClick={toggleForm}
                className="mt-4 text-blue-600 underline hover:text-blue-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

