import Link from "next/link";
import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
      </Link>

      <h2 className="font-semibold text-lg line-clamp-1 mb-1">
        {product.title}
      </h2>

      <p className="text-gray-500 text-sm mb-2">{product.category}</p>

      <div className="mt-auto flex justify-between items-center pt-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>

        <Link href={`/product/${product.id}`}>
          <Button>Add +</Button>
        </Link>
      </div>
    </div>
  );
}