"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre abierto y cerrado
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Enlace a la página principal */}
        <div className="text-white font-bold text-xl">
          <Link href="/">Limpieza Total</Link>
        </div>
        
        {/* Menú de navegación en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Inicio</Link>
          </li>
          <li>
            <Link href="/products" className="text-white hover:text-gray-300">Productos</Link>
          </li>
          <li>
            <Link href="/#benefits" className="text-white hover:text-gray-300">Beneficios</Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white hover:text-gray-300">Contacto</Link>
          </li>
          <li>
            <Link href="/cart" className="text-white hover:text-gray-300">Carrito</Link>
          </li>
        </ul>

        {/* Botón de menú para pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil que aparece cuando isOpen es true */}
      {isOpen && (
        <ul className="md:hidden bg-blue-500 p-4 space-y-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Productos
            </Link>
          </li>
          <li>
            <Link href="/#benefits" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Beneficios
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
