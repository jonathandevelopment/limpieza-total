"use client"
import Link from 'next/link';
import { products } from '../../utils/products';
import { useState } from 'react';

export default function ProductsPage() {
  // Opciones de ejemplo para los dropdowns
  const [selectedCategory, setSelectedCategory] = useState('Todas las categorías');
  const [selectedProductType, setSelectedProductType] = useState('Todos los tipos');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos los precios');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Productos</h1>

      {/* Filtro con Dropdowns */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <div className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
          
          {/* Campo de búsqueda */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <label className="text-gray-600">Filtros</label>
            <input
              type="text"
              placeholder="Buscar"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Dropdowns */}
          <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
            {/* Dropdown de Categorías */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 w-full md:w-auto"
            >
              <option>Todas las categorías</option>
              <option>Hogar</option>
              <option>Vehículos</option>
              <option>Industrial</option>
            </select>

            {/* Dropdown de Tipo de Producto */}
            <select
              value={selectedProductType}
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 w-full md:w-auto"
            >
              <option>Todos los tipos</option>
              <option>Limpiadores</option>
              <option>Desinfectantes</option>
              <option>Detergentes</option>
            </select>

            {/* Dropdown de Rango de Precios */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 w-full md:w-auto"
            >
              <option>Todos los precios</option>
              <option>$0 - $10</option>
              <option>$10 - $20</option>
              <option>$20 - $30</option>
            </select>
          </div>

          {/* Clear filters y contador de productos */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <button className="text-gray-600 underline">Limpiar filtros</button>
            <span className="text-gray-600">{products.length} productos</span>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.imagen} alt={product.nombre} className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold">{product.nombre}</h3>
            <p className="text-gray-700">{product.descripcion}</p>
            <p className="text-lg font-semibold mt-4">{product.precio}</p>
            <div className="mt-4">
                <Link href="#" className="text-blue-600 hover:underline">Ver producto</Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
