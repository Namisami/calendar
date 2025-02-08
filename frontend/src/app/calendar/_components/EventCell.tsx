import { Box, IconButton, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDeleteTaskMutation, useLazyGetTasksByUsernameQuery } from "@/api/base";
import { useAppDispatch } from "@/store/hooks";
import { setTasks } from "@/store/slices/taskSlice";
import React from "react";

type EventCellProps = {
  id: number;
  username: string;
} & React.PropsWithChildren

export default function EventCell({ 
  children, 
  id, 
  username 
}: EventCellProps) {
  const [deleteTask] = useDeleteTaskMutation();
  const [fetchTasks] = useLazyGetTasksByUsernameQuery();

  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    await deleteTask({id});
    const { data } = await fetchTasks({username});
    dispatch(setTasks(data ?? []));
  };

  if (!children) return;

  return (
    <Box sx={{ background: "#EEFDEC", padding: '0 10px' }}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        {children}
        <IconButton onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}