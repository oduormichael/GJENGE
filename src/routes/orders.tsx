import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Sidebar, Header } from '@/components'
import { OrdersTable } from '@/components/tables/Orders'
import { fetchOrders } from '@/api'

export const Route = createFileRoute('/orders')({
  component: () => <ManageOrders />,
})

function ManageOrders() {
  const [orders, setOrders] = React.useState([])
  React.useEffect(() => {
    fetchOrders().then((data) => setOrders(data))
  }, [])
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
        <Header location="Orders" />
      </section>
      <div className="mt-8">
        <h1 className="text-3xl leading-9">Manage Orders</h1>
      </div>
      <OrdersTable data={orders}  />
    </div>
  )
}
