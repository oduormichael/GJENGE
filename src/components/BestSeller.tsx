import * as React from "react";
import { ProductCard, ProductSkeleton } from "@/components/ui";
import {fetchProducts} from "@/api";
import {Link} from "@tanstack/react-router"

export function BestSeller() {
    const [products, setProducts] = React.useState([]);

    // fetch products
    async function productsFetcher() {
      setProducts(await fetchProducts(4));
    }
    productsFetcher();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-end justify-between">
	<h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Best Sellers
        </h2>
	<Link to="/products" className="text-slate-500 text-sm font-medium">View All &rarr;</Link>
	</div>
          {products.length === 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
          ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          )}
      </div>
    </div>
  );
}
