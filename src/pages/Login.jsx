import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper
} from "@mui/material";
import { useState } from "react";

export default function Login() {

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  // ✅ Send OTP
  const handleSendOtp = async () => {

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    setError("");

    // 🔥 DEMO OTP (Replace with backend API)
    const demoOtp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(demoOtp.toString());

    alert("Demo OTP: " + demoOtp); // remove in production

    setOtpSent(true);
  };

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {

    if (otp !== generatedOtp) {
      setError("Invalid OTP");
      return;
    }

    setError("");

    alert("Login Successful ✅");

    // 👉 Redirect after login
    // navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>

        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 4, fontWeight: 700, color: "#1e2aff" }}
        >
          Login with Mobile OTP
        </Typography>

        <Grid container spacing={2}>

          {/* MOBILE FIELD */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              inputProps={{ maxLength: 10 }}
              error={Boolean(error)}
              helperText={error}
            />
          </Grid>

          {/* SEND OTP BUTTON */}
          {!otpSent && (
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  background: "#1e2aff",
                  "&:hover": { background: "#1420d4" }
                }}
                onClick={handleSendOtp}
              >
                Send OTP
              </Button>
            </Grid>
          )}

          {/* OTP FIELD */}
          {otpSent && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    background: "#f39c12",
                    "&:hover": { background: "#e67e22" }
                  }}
                  onClick={handleVerifyOtp}
                >
                  Verify & Login
                </Button>
              </Grid>
            </>
          )}

        </Grid>

      </Paper>
    </Container>
  );
}