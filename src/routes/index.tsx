import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import { FormComponent } from '@/components'
import {Logo, MainImage} from "@/assets/images"

export const Route = createFileRoute('/')({
  component: () => <LoginPage />,
})

export default function LoginPage(){
  return (
    <section className="flex h-screen overflow-y-hidden">
      <div className="w-1/3 bg-slate-100">
        <img src={MainImage} alt="" className="h-[100%] object-cover" />
      </div>
      <div className="grid align-center pl-40 relative w-full">
        <img src={Logo} alt="" className="w-14 absolute top-10 left-10" />
        <FormComponent />        
      </div>
    </section>
  );
}
