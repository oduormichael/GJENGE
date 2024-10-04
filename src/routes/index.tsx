import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import { FormComponent } from '../components/FormComponent'

export const Route = createFileRoute('/')({
  component: () => <LoginPage />,
})

export default function LoginPage(){
  return (
    <section className="grid items-center h-screen">
      <div className=" flex justify-center">
        <FormComponent />
      </div>
    </section>
  );
}