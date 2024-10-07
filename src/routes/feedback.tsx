import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { Sidebar, Header } from '@/components'
import { FeedbackTable } from '@/components/tables/Feedback'

export const Route = createFileRoute('/feedback')({
  component: () => <ViewFeedback />,
})

function ViewFeedback() {
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
        <Header location="Feedback" />
      </section>
      <div className="mt-8">
        <h1 className="text-3xl leading-9">User Feedback</h1>
      </div>
      <FeedbackTable />
    </div>
  )
}
