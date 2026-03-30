import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyStore
      </Link>

      <div className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Products
        </Link>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Cart (0)
      </button>
    </nav>
  );
}