import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Sidebar, Header } from "@/components";
import { Button } from "@/components/ui";
import { fetchUsers } from "@/api";
import { useEffect, useState } from "react";
import { UsersTable } from "@/components/tables/Users";

export const Route = createFileRoute("/users")({
  component: () => <ManageUsers />,
});

function ManageUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, [])
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
        <Header location="Users" />
      </section>
      <div className="mt-8">
        <h1 className="text-3xl leading-9">Manage Users</h1>
      </div>
      <UsersTable data={users} />
    </div>
  );
}
