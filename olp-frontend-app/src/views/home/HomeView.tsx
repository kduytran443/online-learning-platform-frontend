import { Box } from "@mui/material";

export function HomeView() {
    return <Box
        sx={{ display: 'flex' }}
    >
    <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
      Dashboard content for Homeview
    </Box>
  </Box>;
}
