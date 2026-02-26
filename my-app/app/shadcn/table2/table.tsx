import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const alerts = [
  {
    smartId: "INV001",
    type: "Pulsaciones",
    paciente: "Maria Isabel",
    hour: "16:00h",
    date: "26/02/2026",
    description: "High PPM",
  },
 {
    smartId: "INV001",
    type: "Pulsaciones",
    paciente: "Maria Isabel",
    hour: "16:00h",
    date: "26/02/2026",
    description: "High PPM",
  },
  {
    smartId: "INV001",
    type: "Pulsaciones",
    paciente: "Maria Isabel",
    hour: "16:00h",
    date: "26/02/2026",
    description: "High PPM",
  }, 
]

export function TableFooterExample() {
  return (
    <Table className="mt-9">
      <TableCaption>A list of your recent alerts.</TableCaption>
      <TableHeader>
        <TableRow className=" bg-blue-300">
          <TableHead>SmartWatch</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Paciente</TableHead>
          <TableHead>Hora</TableHead>
           <TableHead>Fecha</TableHead>
            <TableHead>Descripción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {alerts.slice(0, 3).map((alert) => (
          <TableRow key={alert.smartId}>
            <TableCell className="font-medium">{alert.smartId}</TableCell>
            <TableCell >{alert.type}</TableCell>
            <TableCell>{alert.paciente}</TableCell>
            <TableCell>{alert.hour}</TableCell>
            <TableCell >{alert.date}</TableCell>
             <TableCell >{alert.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
        <TableRow>
        </TableRow>
     
    </Table>
  )
}
