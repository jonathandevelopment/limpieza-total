
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Información de la Empresa */}
            <div>
              <h3 className="text-xl font-bold mb-4">Limpieza Total</h3>
              <p>
                Productos de limpieza de alta calidad para el hogar y vehículos. Nuestra misión es mantener tus espacios impecables.
              </p>
            </div>
            
            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">Inicio</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Productos</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Servicios</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Contacto</a>
                </li>
              </ul>
            </div>
            
            {/* Columna 3: Contacto */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <ul className="space-y-2">
                <li>Teléfono: +123 456 7890</li>
                <li>Email: contacto@limpiezatotal.com</li>
                <li>Dirección: Calle Ficticia 123, Ciudad</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">&copy; 2024 Limpieza Total. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
  