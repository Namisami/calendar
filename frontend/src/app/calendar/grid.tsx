import { CalendarRow } from "@/api/base.types";
import { GridColDef } from "@mui/x-data-grid";
import EventCell from "@/app/calendar/_components/EventCell";

export const columns: GridColDef<CalendarRow>[] = [
  { 
    field: 'time', 
    headerName: 'Время', 
  },
  {
    field: 'monday',
    headerName: 'Понедельник',
    sortable: false,
    flex: 1,
    renderCell: ({value, row: {id}}) => <EventCell id={id}>{value}</EventCell>,
  },
  {
    field: 'tuesday',
    headerName: 'Вторник',
    sortable: false,
    flex: 1,
    renderCell: ({value, row: {id}}) => <EventCell id={id}>{value}</EventCell>,
  },
  {
    field: 'wednesday',
    headerName: 'Среда',
    sortable: false,
    flex: 1,
    renderCell: ({value, row: {id}}) => <EventCell id={id}>{value}</EventCell>,
  },
  {
    field: 'thursday',
    headerName: 'Четверг',
    sortable: false,
    flex: 1,
    renderCell: ({value, row: {id}}) => <EventCell id={id}>{value}</EventCell>,
  },
  {
    field: 'friday',
    headerName: 'Пятница',
    sortable: false,
    flex: 1,
    renderCell: ({value, row: {id}}) => <EventCell id={id}>{value}</EventCell>,
  },
];