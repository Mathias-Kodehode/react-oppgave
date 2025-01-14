import ProductCard from "./ProductCard";
function App() {
  const electronicProducts = [
    {
      id: 0,
      name: 'Acer Chromebook 315 15,6" FHD',
      description: "Celeron N4020, 4 GB RAM, 64 GB eMMC, Google Chrome OS",
      price: 199.0,
      category: "Laptops",
    },
    {
      id: 1,
      name: 'Samsung Galaxy Chromebook Go 14" HD',
      description: "Celeron N4500, 4 GB RAM, 32 GB eMMC, Google Chrome OS",
      price: 299.0,
      category: "Laptops",
    },
    {
      id: 2,
      name: 'LG 55" 4K UHD Smart TV',
      description: "4K UHD, webOS, HDR10, ThinQ AI",
      price: 499.0,
      category: "Televisions",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Wireless Headphones",
      description:
        "Active Noise Cancelling, 30-hour battery life, Bluetooth 5.2",
      price: 279.0,
      category: "Audio",
    },
    {
      id: 4,
      name: "Apple iPhone 15 128GB",
      description: "A16 Bionic chip, 6.1-inch display, Dual-camera system",
      price: 999.0,
      category: "Smartphones",
    },
    {
      id: 5,
      name: "Dell Inspiron 15 Laptop",
      description: "Intel Core i5, 8 GB RAM, 256 GB SSD, Windows 11",
      price: 449.0,
      category: "Laptops",
    },
    {
      id: 6,
      name: "Canon EOS 2000D DSLR Camera",
      description: "24.1 MP, Full HD video, Wi-Fi and NFC",
      price: 379.0,
      category: "Cameras",
    },
    {
      id: 7,
      name: "Bose SoundLink Revolve+ II",
      description: "360-degree sound, 17-hour battery life, Bluetooth",
      price: 199.0,
      category: "Audio",
    },
    {
      id: 8,
      name: "Microsoft Surface Pro 9",
      description: "Intel Core i7, 16 GB RAM, 512 GB SSD, Windows 11 Pro",
      price: 999.0,
      category: "Tablets",
    },
    {
      id: 9,
      name: "Samsung Galaxy Tab S9",
      description: "11-inch AMOLED display, Snapdragon 8 Gen 2, 256 GB Storage",
      price: 799.0,
      category: "Tablets",
    },
  ];
  return (
    <div>
      {electronicProducts.map((product) => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
}

export default App;
