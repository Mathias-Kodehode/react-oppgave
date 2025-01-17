import ProductCard from "./ProductCard";
import styles from "./App.module.css";
function App() {
  const electronicProducts = [
    {
      id: 0,
      name: "Spaghetti Bolognese",
      description: "Spaghetti, kjøttsaus, parmesan",
      price: 159.0,
      category: "Hovedrett",
    },
    {
      id: 1,
      name: "Kremet Kyllingsuppe",
      description: "Kylling, fløte, gulrøtter, selleri",
      price: 129.0,
      category: "Forrett",
    },
    {
      id: 2,
      name: "Margarita Pizza",
      description: "Tomatsaus, mozzarella, basilikum",
      price: 169.0,
      category: "Hovedrett",
    },
    {
      id: 3,
      name: "Sushi Mix",
      description: "Laks, tunfisk, reker, ris",
      price: 229.0,
      category: "Hovedrett",
    },
    {
      id: 4,
      name: "Cæsarsalat",
      description: "Romanosalat, kylling, parmesan, dressing",
      price: 139.0,
      category: "Forrett",
    },
    {
      id: 5,
      name: "Brownie med Is",
      description: "Brownie, vaniljeis, sjokoladesaus",
      price: 89.0,
      category: "Dessert",
    },
    {
      id: 6,
      name: "Taco Tallerken",
      description: "Kjøttdeig, mais, ost, guacamole",
      price: 199.0,
      category: "Hovedrett",
    },
    {
      id: 7,
      name: "Pannekaker med Syltetøy",
      description: "Pannekaker, jordbærsyltetøy, sukker",
      price: 99.0,
      category: "Dessert",
    },
    {
      id: 8,
      name: "Reker med Sitron",
      description: "Reker, sitron, dill, brød",
      price: 149.0,
      category: "Forrett",
    },
  ];

  return (
    <div className={styles.container}>
      {electronicProducts.map((product) => {
        return <ProductCard key={product.id} data={product} />;
      })}
    </div>
  );
}

export default App;
