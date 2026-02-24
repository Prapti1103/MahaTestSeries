/* eslint-disable no-undef */
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Link
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

export default function Register() {

  const [paymentDone, setPaymentDone] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobNo: "",
    gender: "",
    groupType: "",
    medium: "",
    board: "",
    studentClass: "",
    district: "",
    school: ""
  });
  const [errors, setErrors] = useState({
  mobNo: ""
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* ================= PAYMENT ================= */
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890", // Replace with real key
      amount: 10000,
      currency: "INR",
      name: "MahaTest Registration",
      description: "Exam Registration Fee - ₹100",
      handler: function () {
        setPaymentDone(true);
        alert("Payment Successful ✅");
      },
      theme: { color: "#1e2aff" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async () => {
    

    if (!/^[6-9]\d{9}$/.test(formData.mobNo)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

    if (!paymentDone) {
      alert("Please complete payment first");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept Terms & Conditions");
      return;
    }

    try {
      await axios.post("http://localhost:8080/saveForm", formData);

      alert("Registration Successful!");

      setFormData({
        name: "",
        mobNo: "",
        gender: "",
        groupType: "",
        medium: "",
        board: "",
        studentClass: "",
        district: "",
        school: ""
      });

      setPaymentDone(false);
      setTermsAccepted(false);

    } catch (err) {
      alert("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>

      <Box
        sx={{
          background: "#f8f9ff",
          p: 4,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 4, fontWeight: 700, color: "#1e2aff" }}
        >
          MST Exam Registration Form
        </Typography>

        {/* ================= FORM GRID ================= */}
        <Grid container spacing={2}>

          {/* ===== ROW 1 ===== */}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Student Full Name"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>

        <Grid item xs={12} md={4}>
  <TextField
    fullWidth
    label="Mobile Number"
    size="small"
    name="mobNo"
    value={formData.mobNo}
    onChange={(e) => {
      const value = e.target.value;

      // Allow only numbers
      if (!/^\d*$/.test(value)) return;

      setFormData({
        ...formData,
        mobNo: value
      });

      // Validation
      if (value.length !== 10) {
        setErrors({ ...errors, mobNo: "Mobile number must be 10 digits" });
      } else if (!/^[6-9]\d{9}$/.test(value)) {
        setErrors({
          ...errors,
          mobNo: "Mobile number must start with 6-9"
        });
      } else {
        setErrors({ ...errors, mobNo: "" });
      }
    }}
    inputProps={{ maxLength: 10 }}
    error={Boolean(errors.mobNo)}
    helperText={errors.mobNo}
  />
</Grid>

          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="Gender"
              size="small"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="MALE">Male</MenuItem>
              <MenuItem value="FEMALE">Female</MenuItem>
              <MenuItem value="OTHER">Other</MenuItem>
            </TextField>
          </Grid>

          {/* ===== ROW 2 ===== */}
          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Group"
              size="small"
              name="groupType"
              value={formData.groupType}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="GROUP_A">Group A</MenuItem>
              <MenuItem value="GROUP_B">Group B</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Medium"
              size="small"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Marathi">Marathi</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Board"
              size="small"
              name="board"
              value={formData.board}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="State Board">State Board</MenuItem>
              <MenuItem value="CBSE">CBSE</MenuItem>
              <MenuItem value="ICSE">ICSE</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              select
              fullWidth
              label="Class"
              size="small"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              {[4,5,6,7,8,9,10].map(c => (
                <MenuItem key={c} value={c}>{c}th</MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* ===== ROW 3 ===== */}
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="District"
              size="small"
              name="district"
              value={formData.district}
              onChange={handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              {[
                "Ahmednagar","Akola","Amravati","Aurangabad","Beed",
                "Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli",
                "Gondia","Hingoli","Jalgaon","Jalna","Kolhapur",
                "Latur","Mumbai City","Mumbai Suburban","Nagpur",
                "Nanded","Nandurbar","Nashik","Osmanabad",
                "Palghar","Parbhani","Pune","Raigad",
                "Ratnagiri","Sangli","Satara","Sindhudurg",
                "Solapur","Thane","Wardha","Washim","Yavatmal"
              ].map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="School Name"
              size="small"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
          </Grid>

          {/* ================= PAYMENT ================= */}
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />

            <Box
              sx={{
                border: "1px solid #d0d9ff",
                borderRadius: 2,
                p: 2,
                textAlign: "center",
                background: "#ffffff",
                maxWidth: 400,
                mx: "auto"
              }}
            >
              <Typography sx={{ mb: 1, fontWeight: 600 }}>
                Registration Fee: ₹100
              </Typography>

              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "#1e2aff",
                  "&:hover": { background: "#1420d4" }
                }}
                onClick={handlePayment}
              >
                Pay ₹100
              </Button>

              {paymentDone && (
                <Typography sx={{ mt: 1, color: "green", fontSize: 14 }}>
                  Payment Completed ✔
                </Typography>
              )}
            </Box>
          </Grid>

          {/* ================= TERMS ================= */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              }
              label={
                <Typography variant="body2">
                  I accept the{" "}
                  <Link
                    component="button"
                    onClick={() => setOpenTerms(true)}
                    underline="hover"
                  >
                    Terms & Conditions
                  </Link>
                </Typography>
              }
            />
          </Grid>

          {/* ================= REGISTER BUTTON ================= */}
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              disabled={!paymentDone || !termsAccepted}
              sx={{
                background:
                  paymentDone && termsAccepted ? "#f39c12" : "#ccc",
                px: 6,
                py: 1.2,
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  background:
                    paymentDone && termsAccepted ? "#e67e22" : "#ccc"
                }
              }}
              onClick={handleSubmit}
            >
              REGISTER
            </Button>
          </Grid>
          {/* ================= LOGIN REDIRECT ================= */}
<Grid item xs={12} textAlign="center">
  <Typography variant="body2" sx={{ mt: 2 }}>
    Already Registered?{" "}
    <Link
      component={RouterLink}
      to="/login"
      underline="hover"
      sx={{ fontWeight: 600, color: "#1e2aff" }}
    >
      Login Here
    </Link>
  </Typography>
</Grid>

        </Grid>
      </Box>

      {/* ================= TERMS POPUP ================= */}
      <Dialog
        open={openTerms}
        onClose={() => setOpenTerms(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>MahaTest Terms & Conditions</DialogTitle>
        <DialogContent dividers>
          <Typography paragraph>
            1. ₹100 registration fee is non-refundable.
          </Typography>
          <Typography paragraph>
            2. Student must provide valid and accurate information.
          </Typography>
          <Typography paragraph>
            3. Any false information may lead to cancellation.
          </Typography>
          <Typography paragraph>
            4. Exam guidelines must be followed strictly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTerms(false)}>Close</Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}