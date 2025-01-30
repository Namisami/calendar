"use client"

import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
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

const rows = [
  { id: 1, time: '10:00', monday: 'СВО', tuesday: null },
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
          disableRowSelectionOnClick
        />
      </Stack>
    </Box>
  );
}
