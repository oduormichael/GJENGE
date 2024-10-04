import { createFileRoute } from '@tanstack/react-router'
import * as React from "react"

export const Route = createFileRoute('/dashboard')({
  component: () => <div>Hello /dashboard!</div>,
})
