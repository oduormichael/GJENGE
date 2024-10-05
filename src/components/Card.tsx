import * as React from "react";

import { Button } from "@/components/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardComponent({ iconSrc, title, statistic, moreDetails }) {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardDescription className="font-normal px-1">
            {title}
          </CardDescription>
          <img src={iconSrc} alt={title} className="w-4 opacity-30" />
        </div>
        <CardTitle className="text-5xl">{statistic}</CardTitle>
        <p className="font-base text-sm px-2">{moreDetails}</p>
      </CardHeader>
    </Card>
  );
}
