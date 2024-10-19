"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { chartConfig } from "@/config"
import { fetchSales } from "@/api"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"

export const description = "An interactive bar chart"

export function ChartComponent() {
  const [chartData, setChartData] = React.useState([]);
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("trashRecycled");
  const [loading, setLoading] = React.useState(true);

  async function FetchSalesData() {
    const sales = await fetchSales();
    setChartData(sales);
    setLoading(false);
  }
  React.useEffect(() => {
    FetchSalesData();
  }, []);

  const total = React.useMemo(
    () => ({
      trashRecycled: chartData.reduce((acc, curr) => acc + curr.trash_recycled, 0),
      bricksSold: chartData.reduce((acc, curr) => acc + curr.bricks_sold, 0),
    }),
    [chartData]
  );

  return (
    <Card className="shadow-none border-none">
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className="text-2xl">Sales</CardTitle>
          <CardDescription>
            Showing total bricks sales for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["trashRecycled", "bricksSold"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                {loading ? (
                  <Skeleton className="h-6 w-16 sm:h-8 sm:w-24" />
                ) : (
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        {loading ? (
          <Skeleton className="h-[250px] w-full" />
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar dataKey={activeChart === "trashRecycled" ? "trash_recycled" : "bricks_sold"} fill={`var(--color-${activeChart})`} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}