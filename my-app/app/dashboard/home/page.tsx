"use client";

import { TableFooterExample } from "@/app/shadcn/table2/table";
import { BreadCrump } from "@/app/shadcn/breadcrump/breadcrump";
import { DreamChart } from "@/app/shadcn/charts/chartSueño";
import { ChartLineDefault} from "@/app/shadcn/charts/chartLineDots";
import { ChartAreaDefault } from "@/app/shadcn/charts/chartArea";
import { temperatura, pasos, pulsaciones } from "@/app/services/hardCodeData"
import { ComboboxBasic } from "@/app/shadcn/combobox/combobox";



export default function Page() {
  return (
    
    <>

      <div className="flex justify-between items-center"> 
        <BreadCrump/>
        <ComboboxBasic/>
      </div>
      
      <h1 className="font-bold text-2xl mt-4">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-5">
         <ChartLineDefault color="red" title="Pulsaciones" data={temperatura}/>
         <ChartLineDefault color="green" title="Pasos" data={temperatura}/>
         <ChartLineDefault color="red" title="Temperatura" data={pulsaciones}/>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-10">
         <DreamChart/>
         <ChartAreaDefault/>
        

      </div>
     
    <TableFooterExample/>
      
    </>
  );
}
