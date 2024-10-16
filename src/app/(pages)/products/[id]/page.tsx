"use client"
import { useParams } from 'next/navigation';
import { products } from '../../../utils/products'; // Ajusta la ruta si es necesario
import { useState } from 'react';
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;

  // Encuentra el producto correspondiente
  const product = products.find((p) => p.id === parseInt(id as string));

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cantidad, setCantidad] = useState(1); // Estado inicial con valor de 1

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const increaseCantidad = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const decreaseCantidad = () => {
    if (cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <Image 
          width={400}
          height={400}
          src={product.imagen} 
          alt={product.nombre} 
          className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg" 
        />

        {/* Información del producto */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.nombre}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.descripcion}</p>
          <p className="text-3xl font-semibold text-green-600 mb-4">{product.precio}</p>

          {/* Cantidad del producto con botones "+" y "-" */}
          <div className="mb-4 flex items-center space-x-4">
            <label className="block text-gray-700">Cantidad:</label>
            <div className="flex items-center space-x-2">
              <button 
                onClick={decreaseCantidad} 
                className="px-3 py-1 bg-gray-200 rounded-lg text-xl font-bold"
              >
                -
              </button>
              <div 
              className="w-12 text-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none">
                {cantidad} </div>
              <button 
                onClick={increaseCantidad} 
                className="px-3 py-1 bg-gray-200 rounded-lg text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Botón de Comprar ajustado */}
          <button 
            onClick={toggleForm} 
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300 w-auto"
          >
            Comprar
          </button>
        </div>
      </div>

      {/* Formulario emergente para cotización */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Cotización de {product.nombre}</h2>
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
                <label className="block text-left mb-2 text-gray-700">Cantidad solicitada:</label>
                <input 
                  type="number" 
                  value={cantidad} 
                  readOnly 
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-700">Mensaje:</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                  placeholder="Escribe tu mensaje" 
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
  );
}
