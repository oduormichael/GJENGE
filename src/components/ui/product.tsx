import * as React from "react"
export function ProductCard(product) {
    return (
      <div key={product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-full">
            <p className="text-green-600 text-sm font-medium leading-5">
              &#9733; 5.0
            </p>
            <h3 className="text-xl font-semibold">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="text-sm font-base text-gray-900">{product.price}</p>
            <div className="py-1">
              <hr />
            </div>
            <p className="mt-1 text-sm text-gray-500">740 orders</p>
          </div>
        </div>
      </div>
    );
}