import { Box, Stack } from "@mui/material";
import CreateForm from "./_components/CreateForm";

export default function NewPage() {
  return (
    <Box height="100%" width="40%" mx="auto">
      <Stack height="100%" justifyContent="center">
        <CreateForm />
      </Stack>
    </Box>
  )
}

