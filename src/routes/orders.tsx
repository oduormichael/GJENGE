import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Sidebar, Header } from '@/components'
import { OrdersTable } from '@/components/tables/Orders'
import { fetchOrders } from '@/api'

export const Route = createFileRoute('/orders')({
  component: () => <ManageOrders />,
})

function ManageOrders() {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    fetchOrders().then((data) => setOrders(data));
  }, []);
  return (
    <div className="flex flex-col bg-gray-50 ">
      <section className="flex gap-2 items-center sticky px-4 top-0 bg-background py-4 z-10 border-b-[1px]">
        <Sidebar
          trigger={
            <img
              src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/menu-512.png"
              className="w-6"
            />
          }
        />
        <Header location="Orders" />
      </section>
      <section className="px-6 pt-24 grid gap-10">
        <div>
          <h1 className="text-5xl font-bold text-neutral-300 leading-[2px]">
            Orders
          </h1>
          <p className="font-medium leading-9 bg-white w-max px-2 rounded-sm">
            Manage Orders, activate, deactivate &nbsp;and more
          </p>
        </div>
      </section>
      <OrdersTable data={orders} />
    </div>
  );
}
