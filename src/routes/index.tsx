import { createFileRoute } from '@tanstack/react-router'
// import * as React from "react"
import { FormComponent } from '../components/FormComponent'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: () => <LoginPage />,
})

export default function LoginPage(){
  return (
    <section className="grid justify-center items-center h-screen">
      <div className=" flex justify-center w-96 h-fit">
        <FormComponent />
      </div>
    </section>
  );
}