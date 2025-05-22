import React from 'react';

const FurnitureProductList = ({ products, isLoading }) => {
  // Kondisi: Loading
  if (isLoading) {
    return (
      <div className="text-center p-6 text-gray-500">
        Memuat produk furniture...
      </div>
    );
  }

  // Kondisi: Tidak ada produk
  if (!products || products.length === 0) {
    return (
      <div className="text-center p-6 text-red-500">
        Tidak ada produk furniture yang tersedia.
      </div>
    );
  }

  // Kondisi: Tampilkan produk
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-blue-600 font-bold mt-2">Rp {product.price.toLocaleString()}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureProductList;
