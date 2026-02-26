"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "Sueño"

const chartData = [
  { day: "Lunes", horas: 6 },
  { day: "Martes", horas: 7 },
  { day: "Miercoles", horas: 5 },
  { day: "Jueves", horas: 3 },
  { day: "Viernes", horas: 5 },
  { day: "Sabado", horas: 8 },
   { day: "Domingo", horas: 10 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "purple",
  },
} satisfies ChartConfig

export function DreamChart() {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>Sueño</CardTitle>
        <CardDescription>Esta semana</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="horas" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
