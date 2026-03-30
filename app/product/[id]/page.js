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

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          Back to products
        </Link>

        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-4 shadow-sm sm:gap-10 sm:p-6 md:grid-cols-2 md:p-10">
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-contain sm:h-72 md:h-96"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm uppercase tracking-wide text-gray-500">
              {product.category}
            </p>

            <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              {product.title}
            </h1>

            <p className="mb-6 text-2xl font-bold text-green-600 sm:text-3xl">
              ${product.price}
            </p>

            <p className="mb-6 leading-7 text-gray-700">
              {product.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button>Add to Cart</Button>
              <Button variant="secondary">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
