export default function Testimonials() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="/images/testimonial1.webp"
                  alt="Cliente 1"
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                "&quot;Los productos de Limpieza Total me han ayudado a mantener mi hogar impecable. ¡Altamente recomendados!"&quot;
              </p>
              <h3 className="text-center font-semibold">Ana Rodríguez</h3>
            </div>
  
            {/* Testimonio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="/images/testimonial2.webp"
                  alt="Cliente 2"
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                "&quot;La cera para autos de Limpieza Total es la mejor que he usado. Mi coche brilla como nunca."&quot;
              </p>
              <h3 className="text-center font-semibold">Carlos García</h3>
            </div>
  
            {/* Testimonio 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <img
                  src="/images/testimonial3.webp"
                  alt="Cliente 3"
                  className="w-16 h-16 rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-700 text-center italic mb-4">
                "&quot;Mis hijos y mi familia están seguros usando los productos de Limpieza Total. ¡Sin químicos dañinos!"&quot;
              </p>
              <h3 className="text-center font-semibold">Lucía Pérez</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  