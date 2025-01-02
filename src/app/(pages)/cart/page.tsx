'use client';

import React from 'react';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Tu Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Tu carrito está vacío.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tabla del Carrito */}
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-4 px-6">Producto</th>
                <th className="py-4 px-6 text-center">Precio</th>
                <th className="py-4 px-6 text-center">Cantidad</th>
                <th className="py-4 px-6 text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 px-6 font-semibold">{item.name}</td>
                  <td className="py-4 px-6 text-center">₡{item.price}</td>
                  <td className="py-4 px-6 text-center">{item.quantity}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total y Botones */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ₡{totalPrice.toLocaleString()}
            </h2>
            <div className="mt-4 md:mt-0">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 mr-4"
              >
                Vaciar Carrito
              </button>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
