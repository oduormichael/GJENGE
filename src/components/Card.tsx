import * as React from "react";

import { Button, Skeleton } from "@/components/ui";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardComponent({ iconSrc, title, statistic, moreDetails }) {
  return (
    <Card className="shadow-none border-none">
      <CardHeader className="divide-y">
        <CardTitle className="text-2xl">{statistic}</CardTitle>
        <div className="flex justify-between items-center py-2 font-medium text-sm">
          <p className="text-gray-500">{title}</p>
          <p className="text-green-600">&uarr; 25%</p>
        </div>
      </CardHeader>
    </Card>
  );
}

export function CardSkeleton() {
  return (
    <Card className="shadow-none border-none">
      <CardHeader className="divide-y">
        <CardTitle className="text-2xl">
          <Skeleton className="h-8 w-24" />
        </CardTitle>
        <div className="flex justify-between items-center py-2 font-medium text-sm">
          <p className="text-gray-500">
            <Skeleton className="h-4 w-24" />
          </p>
          <p className="text-green-600">
            <Skeleton className="h-4 w-12" />
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}
