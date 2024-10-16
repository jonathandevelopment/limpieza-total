import { products } from '@/app/utils/products';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProducts() {
  // Filtramos los productos destacados (feature: true)
  const featuredProducts = products.filter(product => product.feature);

  return (
    <section id='featured' className="py-8">
      {/* Título de Productos Destacados alineado a la izquierda */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8 pl-6">Productos Destacados</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <Image 
            width={400}
            height={400}
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-auto mb-4" />
            <h3 className="text-xl font-bold">{product.nombre}</h3>
            <p className="text-gray-700">{product.descripcion}</p>
            <p className="text-lg font-semibold mt-4">{product.precio}</p>

            {/* Link "Ver producto" */}
            <div className="mt-4">
                <Link 
                href={`/products/${product.id}`}
                className="text-blue-600 hover:underline">Ver producto</Link>
             
            </div>
          </div>
        ))}
      </div>

      {/* CTA al final de los productos */}
      <div className="mt-8 text-center">
        <div >
          <Link href="/products" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-300">
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
}
