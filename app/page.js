import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Product Listing</h1>
        <p className="text-gray-600 mb-8">
          Explore products from FakeStoreAPI
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}