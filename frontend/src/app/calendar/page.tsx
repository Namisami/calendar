"use client"

import { useLazyGetTasksByUsernameQuery, useGetUsersQuery } from "@/api/base";
import Select from "@/components/Select";
import { Box, Button, FormControl, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useMemo } from "react";
import { columns } from "./grid";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setTasks } from "@/store/slices/taskSlice";

export default function MainPage() {
  const { data, isLoading: isUsersLoading } = useGetUsersQuery();
  const [fetchTasks, {isLoading} ] = useLazyGetTasksByUsernameQuery();

  const tasks = useAppSelector((state) => state.task.tasks);
  const dispatch = useAppDispatch();

  const usersOptions = useMemo(() => data?.map((item) => item.username) ?? [], [data])

  const handleSelectChange = async (e: React.SyntheticEvent, value: string | null) => {
    if (value) {
      const { data } = await fetchTasks({ username: value });
      dispatch(setTasks(data ?? []));
    } else {
      dispatch(setTasks([]));
    }
  };

  return (
    <Box height="100%" mx={2}>
      <Stack direction="column" height="100%" gap={1}>
        <Stack direction="row" justifyContent="space-between" mt={1}>
          <Typography variant="h1">Календарь</Typography>
          <Stack direction="row" gap={2} alignItems="center" width="40%">
            <FormControl sx={{ flex: 1 }}>
              <Select loading={isUsersLoading} options={usersOptions} onChange={handleSelectChange} />
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
          loading={isLoading}
          rows={tasks}
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
          sx={{
            "& .MuiDataGrid-cell": {
              padding: 0
            }
          }}
        />
      </Stack>
    </Box>
  );
}
