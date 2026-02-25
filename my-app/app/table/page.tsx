import { columns, PacienteAlert } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<PacienteAlert[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      alert: "High PPM",
      paciente: "Jose Ma",
      hora: "18:00h",
      fecha:"25/2/2026",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}