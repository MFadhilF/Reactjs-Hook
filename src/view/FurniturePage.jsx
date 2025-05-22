import React, { useEffect, useState } from 'react';
import FurnitureProductList from '../component/FurnitureProductList';

const FurniturePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi fetch data
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'Sofa Minimalis Abu-Abu',
          category: 'Living Room',
          price: 2750000,
          image: 'https://source.unsplash.com/featured/?sofa',
        },
        {
          id: 2,
          name: 'Meja Makan Kayu Solid',
          category: 'Dining Room',
          price: 3250000,
          image: 'https://source.unsplash.com/featured/?dining-table',
        },
        {
          id: 3,
          name: 'Lemari Pakaian 3 Pintu',
          category: 'Bedroom',
          price: 4100000,
          image: 'https://source.unsplash.com/featured/?wardrobe',
        },
      ]);
      setIsLoading(false);
    }, 2000); // Simulasi delay 2 detik
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">Katalog Furniture</h1>
      <FurnitureProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default FurniturePage;
