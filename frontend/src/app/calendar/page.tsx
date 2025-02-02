"use client"

import { useGetUsersQuery } from "@/api/base";
import Select from "@/components/Select";
import { Box, Button, FormControl, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useMemo } from "react";
import { CalendarRow, columns } from "./grid";

const rows: CalendarRow[] = [
  { id: 1, time: '10:00', monday: 'СВО', tuesday: null },
];

export default function MainPage() {
  const { data } = useGetUsersQuery();

  const usersOptions = useMemo(() => data?.map((item) => item.username) ?? [], [data])

  return (
    <Box height="100%" mx={2}>
      <Stack direction="column" height="100%" gap={1}>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="h1">Календарь</Typography>
          <Stack direction="row" gap={2} alignItems="center" width="40%">
            <FormControl sx={{ flex: 1 }}>
              <Select options={usersOptions} />
            </FormControl>
            <Link href="/calendar/new" style={{ height: '100%', flex: 1 }}>
              <Button 
                fullWidth
                variant="contained" 
                size="medium"
                sx={{ height: "100%" }}
              >
                Новое мероприятие
              </Button>
            </Link>
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
