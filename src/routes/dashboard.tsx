import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import {ChartComponent, Resizable, Sidebar, Header} from "@/components"
import { CardComponent } from '@/components';
import {Button} from "@/components/ui"
import { CardData } from "@/data";

export const Route = createFileRoute('/dashboard')({
  component: () => <AdminDashboard />,
})

function AdminDashboard() {
  return (
    <>
      <MainSection />
    </>
  );
}

function MainSection() {
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
        <Header />
      </section>
      <div className='mt-8'>
        <h1 className="text-3xl leading-9">Dashboard</h1>
        <p>Specializes in producing eco-friendly construction materials</p>
      </div>
      <section className="flex flex-grow gap-2">
        {CardData.map((card, index) => (
          <div className="flex-grow">
            <CardComponent
              key={index}
              iconSrc={card.src}
              title={card.title}
              statistic={card.statistic}
              moreDetails={card.moreDetails}
            />
          </div>
        ))}
      </section>
      <ChartComponent />
    </div>
  );
}