"use client";

import { TableFooterExample } from "@/app/shadcn/table2/table";
import { BreadCrump } from "@/app/shadcn/breadcrump/breadcrump";
import { DreamChart } from "@/app/shadcn/charts/chartSueño";
import { ChartLineDefault} from "@/app/shadcn/charts/chartLineDots";
import { ChartAreaDefault } from "@/app/shadcn/charts/chartArea";


export default function Page() {
  return (
    
    <>
      <BreadCrump/>
      <h1 className="font-bold text-2xl mt-2">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-5">
         <ChartLineDefault color="red"/>
         <ChartAreaDefault/>
         <ChartLineDefault color="green"/>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
         <DreamChart/>
         <ChartAreaDefault/>
        

      </div>
     
    <TableFooterExample/>
      
    </>
  );
}
