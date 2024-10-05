import {
  ChartConfig,
} from "@/components/ui/chart";
export const chartConfig = {
  views: {
    label: "Quantity",
  },
  trashRecycled: {
    label: "Trash Recycled",
    color: "hsl(var(--chart-1))",
  },
  bricksSold: {
    label: "Bricks Sold",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
