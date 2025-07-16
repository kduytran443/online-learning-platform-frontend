import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
import { useEffect } from 'react';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function LoginSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutInstance = setTimeout(() => {
      navigate("/dashboard");
    }, 10000); // 10 seconds

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timeoutInstance);
  }, [navigate]);

  return (
    <Dialog open={true} aria-labelledby="login-success-title">
      <DialogTitle id="login-success-title">
        <Box display="flex" alignItems="center" gap={1}>
          <CheckCircleOutlineIcon color="success" fontSize="large" />
          <Typography variant="h6" color="success.main">
            Login Successful!
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Redirecting you to the dashboard...
        </DialogContentText>
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress size={24} color="success" />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
