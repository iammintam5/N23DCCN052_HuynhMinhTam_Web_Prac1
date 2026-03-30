import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const text = await res.text();
    if (!text) {
      return null;
    }

    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 md:h-96 w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
              {product.category}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-3xl font-bold text-green-600 mb-6">
              ${product.price}
            </p>

            <p className="text-gray-700 leading-7 mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-4">
              <Button>Add to Cart</Button>
              <Button variant="secondary">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

