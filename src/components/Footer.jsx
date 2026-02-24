import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box sx={{ background: "#25146b", color: "#fff", pt: 6 }}>

      <Container maxWidth="xl">

       

        {/* 🔥 Reduced Column Gap */}
        <Grid container spacing={2}>

          {/* Company */}
          <Grid item xs={12} md={2.4}>
            <Typography fontWeight={600} mb={2} sx={{ fontSize: 18 }}>
              Company
            </Typography>

            <FooterLink to="/" label="Home" />
            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/contact" label="Contact Us" />
            <FooterLink to="/faq" label="FAQ" />
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2.4}>
            <Typography fontWeight={600} mb={2} sx={{ fontSize: 18 }}>
              Services
            </Typography>

            <FooterLink to="https://courses.ooacademy.co.in/previous-year" label="Test Series" />
            <FooterLink to="https://courses.ooacademy.co.in/study-material" label="Free Ebook" />
            <FooterLink to="https://courses.ooacademy.co.in/study-material" label="Free Notes" />
            <FooterLink to="/live-lectures" label="Free Live Lectures" />
          </Grid>

          {/* Important Links */}
          <Grid item xs={12} md={2.4} sx={{ fontSize: 18 }}>
            <Typography fontWeight={600} mb={2}>
              Important Links
            </Typography>

            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/contact" label="Contact Us" />
            <FooterLink to="/privacypolicy" label="Privacy Policy" />
            <FooterLink to="/terms" label="Terms & Conditions" />
          </Grid>

          {/* 🔥 ENHANCED CONTACT COLUMN */}
          <Grid item xs={12} md={2.4}>
            <Box
              sx={{
                p: 2,
                borderRadius: 3,
                background: "linear-gradient(135deg,#1e125a,#2d1c88)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                }
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={2}
                sx={{ letterSpacing: 1 }}
              >
                Contact Us
              </Typography>

              <Typography sx={{ fontWeight: 600 }}>
                Maharashtra Talent Search Examination
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: "#00e5ff" }} />
                <Typography sx={{ fontSize: 14 }}>
                  N. Wadia College Campus, Pune - 1
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <PhoneIcon sx={{ mr: 1, color: "#00e5ff" }} />
                <Typography sx={{ fontSize: 14 }}>
                  (020) 26168486
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <EmailIcon sx={{ mr: 1, color: "#00e5ff" }} />
                <Typography sx={{ fontSize: 14 }}>
                  mahatestofficial@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>


          {/* Subscribe */}
          <Grid item xs={12} md={2.4}>
             <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          sx={{ letterSpacing: 2 }}
        >
          MAHATEST
        </Typography>
            <Typography fontWeight={600} mb={2}>
              Subscribe
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter your email"
              size="small"
              sx={{
                background: "#fff",
                borderRadius: 1,
                mb: 2
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(135deg,#ff9800,#ff5722)",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(135deg,#ff5722,#ff9800)"
                }
              }}
            >
              Subscribe
            </Button>
          </Grid>

        </Grid>

      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          mt: 6,
          py: 2,
          background: "#1a0f4d",
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          flexWrap: "wrap"
        }}
      >
        <Typography>
          © 2026 MAHATEST. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography component={Link} to="/privacypolicy" sx={bottomLink}>
            Privacy Policy
          </Typography>

          <Typography component={Link} to="/terms" sx={bottomLink}>
            Terms & Conditions
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}

/* Reusable Footer Link */
function FooterLink({ to, label }) {
  return (
    <Typography
      component={Link}
      to={to}
      sx={{
        display: "block",
        color: "#ddd",
        textDecoration: "none",
        mb: 1,
        fontSize: 14,
        transition: "0.3s ease",
        "&:hover": {
          color: "#00e5ff",
          transform: "translateX(4px)"
        }
      }}
    >
      {label}
    </Typography>
  );
}

const bottomLink = {
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
};