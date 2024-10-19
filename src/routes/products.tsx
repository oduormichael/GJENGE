import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Sidebar, Header, DialogComponent } from "@/components";
import { ProductCard, ProductSkeleton } from "@/components/ui";
import { ProductTable } from "@/components/tables/Product";
import { Switch } from "@/components/ui/switch";
import { fetchProducts } from "@/api";

export const Route = createFileRoute("/products")({
  component: () => <ProductPage />,
});

function ProductPage() {
  const [isGridLayout, setIsGridLayout] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  
  // fetch products
  async function productsFetcher() {
    setProducts(await fetchProducts(10)); // Adjust the count as needed
  }
  React.useEffect(() => {
    productsFetcher();
  }, []);
  
  return (
    <div className="flex flex-col gap-4 px-6 pt-4">
      <section className="flex gap-2 items-center">
        <Sidebar
          trigger={
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/menu-512.png"
              className="w-6"
            />
          }
        />
        <Header location="Products" />
      </section>
      <div className="mt-10 flex justify-between items-center">
        <h1 className="text-3xl leading-9">Manage Products</h1>
        <div className="flex items-center">
          <DialogComponent
            trigger={<Button variant="outline">Add Product</Button>}
          />
          <Switch
            onclick={() => {
              setIsGridLayout(!isGridLayout);
            }}
          />
        </div>
      </div>
      {isGridLayout ? (
        products.length === 0 ? (
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
        )
      ) : (
        <ProductTable data={products} />
      )}
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}