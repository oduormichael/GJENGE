import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import {ChartComponent, Resizable, Sidebar, Header} from "@/components"
import { CardComponent } from '@/components';
import { CardData } from "@/data";

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
    <div className="flex flex-col gap-4">
      <Header />
      <section className='flex gap-2'>
        {CardData.map((card, index) => (
          <CardComponent
        key={index}
        iconSrc={card.src}
        title={card.title}
        statistic={card.statistic}
        moreDetails={card.moreDetails}
          />
        ))}
      </section>
      <ChartComponent />
    </div>
  );
}