import { CalendarRow } from "@/api/base.types";
import { GridColDef } from "@mui/x-data-grid";

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
  },
  {
    field: 'tuesday',
    headerName: 'Вторник',
    sortable: false,
    flex: 1,
  },
  {
    field: 'wednesday',
    headerName: 'Среда',
    sortable: false,
    flex: 1,
  },
  {
    field: 'thursday',
    headerName: 'Четверг',
    sortable: false,
    flex: 1,
  },
  {
    field: 'friday',
    headerName: 'Пятница',
    sortable: false,
    flex: 1,
  },
];