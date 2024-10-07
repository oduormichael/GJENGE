import * as React from "react";

const products = [
  {
    id: 1,
    name: "Bricks",
    href: "#",
    imageSrc:
      "https://images.pexels.com/photos/19688828/pexels-photo-19688828/free-photo-of-close-up-of-man-building-bricks-wall.jpeg?auto=compress&cs=tinysrgb&w=400",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Ksh 35",
    color: "Black",
  },
];

export function BestSeller() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Best Sellers
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
                  <p className="text-green-600 text-sm font-medium leading-5">&#9733; 5.0</p>
                  <h3 className="text-xl font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm font-base text-gray-900">
                    {product.price}
                  </p>
                  <div className="py-1">
                    <hr />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">740 orders</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
