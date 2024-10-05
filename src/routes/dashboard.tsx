import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import {ChartComponent, Resizable, Sidebar, Header} from "@/components"

export const Route = createFileRoute('/dashboard')({
  component: () => <AdminDashboard />,
})

function AdminDashboard() {
  return (
      <Resizable sidebar={<Sidebar />} main={<MainSection />} />
  );
}

function MainSection() {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <ChartComponent />
    </div>
  );
}