"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { supabase } from "@/backend/client";

import { toast, useToast } from "@/hooks/use-toast";
import { Button, Skeleton, Badge, Toaster } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToastAction } from "@radix-ui/react-toast";

export type User = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
  status: string;
  date_created: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "user_id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("user_id")}</div>
    ),
  },
  {
    accessorKey: "first_name",
    header: "First Name",
    cell: ({ row }) => <div>{row.getValue("first_name")}</div>,
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ row }) => <div>{row.getValue("last_name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
    cell: ({ row }) => <div>{row.getValue("phone_number")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        {row.getValue("status") === "active" && (
          <Badge
            variant="default"
            className="rounded-full bg-green-500 text-white"
          >
            Active
          </Badge>
        )}
        {row.getValue("status") === "deactivated" && (
          <Badge
            variant="destructive"
            className="rounded-full bg-yellow-500 text-white"
          >
            Deactivated
          </Badge>
        )}
        {row.getValue("status") === "banned" && (
          <Badge
            variant="destructive"
            className="rounded-full bg-red-500 text-white"
          >
            Banned
          </Badge>
        )}
      </div>
    ),
  },
  {
    accessorKey: "date_created",
    header: "Date Created",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date_created"));
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return <div>{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      const handleActivate = async () => {
        // Update the user's status to 'active'
        user.status = "active";
        // Add any additional logic to update the user's status in your backend or state management
        const { data, error } = await supabase
          .from("users")
          .update({ status: "active" })
          .eq("user_id", user.user_id);
        if (error) console.error(error);
        toast({
          style: { backgroundColor: "#005a00", color: "#fff" },
          title: "Success",
          description: "User's status updated succesfully.",
          action: (
            <ToastAction altText="refresh">
              <Button
                variant="outline"
                className="font-sm text-black"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </ToastAction>
          ),
        });
      };

      const handleDeactivate = async () => {
        // Update the user's status to 'deactivated'
        user.status = "deactivated";
        // Add any additional logic to update the user's status in your backend or state management
        const { data, error } = await supabase
          .from("users")
          .update({ status: "deactivated" })
          .eq("user_id", user.user_id);
        if (error) console.error(error);
        toast({
          style: { backgroundColor: "#005a00", color: "#fff" },
          title: "Success",
          description: "User's status updated succesfully.",
          action: (
            <ToastAction altText="refresh">
              <Button
                variant="outline"
                className="font-sm text-black"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </ToastAction>
          ),
        });
      };

      const handleBan = async () => {
        // Update the user's status to 'banned'
        user.status = "banned";
        // Add any additional logic to update the user's status in your backend or state management
        const { data, error } = await supabase
          .from("users")
          .update({ status: "banned" })
          .eq("user_id", user.user_id);
        if (error) console.error(error);
        toast({
          style: { backgroundColor: "#005a00", color: "#fff" },
          title: "Success",
          description: "User's status updated succesfully.",
          action: (
            <ToastAction altText="refresh">
              <Button
                variant="outline"
                className="font-sm text-black"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </ToastAction>
          ),
        });
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleActivate}>
              <Badge variant="default" className="rounded-full bg-green-900">
                Activate
              </Badge>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDeactivate}>
              <Badge
                variant="destructive"
                className="rounded-full bg-yellow-500 text-white"
              >
                Deactivate
              </Badge>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleBan}>
              <Badge variant="destructive" className="rounded-full">
                Ban User
              </Badge>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function UsersTable(data) {
  const { toast } = useToast();

  const filteredData = data.data;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const [filterStatus, setFilterStatus] = React.useState("all");

  const toggleFilterStatus = () => {
    const nextStatus = {
      all: "active",
      active: "deactivated",
      deactivated: "banned",
      banned: "all",
    };
    const newStatus = nextStatus[filterStatus];
    setFilterStatus(newStatus);
    table
      .getColumn("status")
      ?.setFilterValue(newStatus === "all" ? "" : newStatus);
  };

  return (
    <div className="w-full grid bg-white">
      <Toaster />
      <div className="flex items-center py-4 px-6 bg-gray-50 border-b-[1px]">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <section className="ml-auto flex gap-2">
          <Button
            variant="outline"
            className="ml-auto"
            onClick={toggleFilterStatus}
          >
            Filter Status:{" "}
            {filterStatus.charAt(0).toUpperCase() + filterStatus.slice(1)}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
      <div className="rounded-md px-2">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <div className="grid gap-2">
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                    <Skeleton className="h-8" />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4 px-2">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}