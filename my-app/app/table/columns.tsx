"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PacienteAlert = {
  id: string
  alert: string
  paciente: string
  hora: string
  fecha:string
}

export const columns: ColumnDef<PacienteAlert>[] = [
  {
    accessorKey: "alert",
    header: "Alerta",
  },
  {
    accessorKey: "paciente",
    header: "Paciente",
  },
  {
    accessorKey: "hora",
    header: "Hora",
  },
    {
    accessorKey: "fecha",
    header: "Fecha",
  },
]