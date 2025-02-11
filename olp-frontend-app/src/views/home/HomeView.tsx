import { Box } from "@mui/material";
import Tippy from "@tippyjs/react";

export function HomeView() {
    return <Box
        sx={{ display: 'flex' }}
    >
    <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
      <Tippy content="Hello">
        <p>Dashboard content for Homeview</p>
      </Tippy>
    </Box>
  </Box>;
}
