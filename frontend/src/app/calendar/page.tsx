"use client"

import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
    renderCell: ({ value }) => (<Chip label={value} />)
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function MainPage() {
  return (
    <Box height="100%" mx={2}>
      <Stack direction="column" height="100%" gap={1}>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="h1">Календарь</Typography>
          <Stack direction="row" gap={2} alignItems="center">
            <FormControl>
              <InputLabel id="select-users-label">Пользователь</InputLabel>
              <Select
                labelId="select-users-label"
                id="select-users"
                value={1}
                label="Пользователь"
                size="medium"
                sx={{ width: "240px" }}
              >
                <MenuItem value={0}>Тест1</MenuItem>
                <MenuItem value={1}>Тест2</MenuItem>
                <MenuItem value={2}>Тест3</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ height: "100%" }} size="medium">
              Новое мероприятие
            </Button>
          </Stack>
        </Stack>
        <DataGrid 
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Stack>
    </Box>
  );
}
