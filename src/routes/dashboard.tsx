import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"
import {ChartComponent} from "@/components"

export const Route = createFileRoute('/dashboard')({
  component: () => <AdminDashboard />,
})

function AdminDashboard() {
  return (
    <ChartComponent />
  )
}