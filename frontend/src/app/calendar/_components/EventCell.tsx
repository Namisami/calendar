import { Box, IconButton, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDeleteTaskMutation } from "@/api/base";

export default function EventCell({ children, id }: React.PropsWithChildren & { id: number }) {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDelete = async () => {
    await deleteTask({id});
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