import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import {ChartComponent, Resizable, Sidebar, Header, BestSeller} from "@/components"
import { CardComponent } from '@/components';
import {Button} from "@/components/ui"
import { CardData } from "@/data";
import { DividerHorizontalIcon } from '@radix-ui/react-icons';

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
    <div className="flex flex-col gap-4 pt-4">
      <section className="flex gap-2 items-center px-6">
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
      <section className="px-6">
        <div className="mt-8">
          <h1 className="text-xl font-bold leading-9">Dashboard</h1>
        </div>
        <section className="flex gap-10 divide-x">
          {CardData.map((card, index) => (
            <div className="w-1/3">
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
      </section>
      <div className="pb-16 pt-4 ">
        <hr />
      </div>
      <ChartComponent />
      <div className="pb-16 pt-4 ">
        <hr />
      </div>
      <section>
        <BestSeller />
      </section>
    </div>
  );
}