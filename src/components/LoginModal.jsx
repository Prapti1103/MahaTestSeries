import { Modal, Box, TextField, Button, Typography } from "@mui/material";

export default function LoginModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        width: 400,
        bgcolor: "background.paper",
        p: 4,
        mx: "auto",
        mt: "10%",
        borderRadius: 2
      }}>
        <Typography variant="h6">Login</Typography>
        <TextField fullWidth label="Email" sx={{ mt: 2 }} />
        <TextField fullWidth label="Password" type="password" sx={{ mt: 2 }} />
        <Button fullWidth variant="contained" sx={{ mt: 3 }}>
          Login
        </Button>
      </Box>
    </Modal>
  );
}
