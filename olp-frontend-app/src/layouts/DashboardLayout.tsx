import { Box } from "@mui/material";
import NavBar from "components/NavBar";

interface DashboardLayoutProps {
    viewPage: React.ReactNode;
}

export function DashboardLayout({viewPage}: DashboardLayoutProps) {
    return <Box
        sx={{ display: 'flex' }}
    >
    <NavBar />
    {viewPage}
  </Box>;
}
