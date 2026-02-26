"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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

export const description = "Pulsaciones"


const chartConfig = {
  desktop: {
    label: "Pulsaciones",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartLineDefault({ ...props}) {
  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>24h</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={props.data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hora"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={"pulsaciones"}
              type="natural"
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Tiene alertas nuevas
        </div>
        <div className="text-muted-foreground leading-none">
          Mostrando información de las ultimas 24h.
        </div>
      </CardFooter>
    </Card>
  )
}
