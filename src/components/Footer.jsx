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
    <Box sx={{ backgroundColor: "#25146b", color: "#fff", pt: 6 }}>

      <Container maxWidth="xl">

        <Grid container spacing={4}>

          {/* Company */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography fontWeight={600} mb={2} fontSize={18}>
              Company
            </Typography>

            <FooterLink to="/" label="Home" />
            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/contact" label="Contact Us" />
            <FooterLink to="/faq" label="FAQ" />
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography fontWeight={600} mb={2} fontSize={18}>
              Services
            </Typography>

            <FooterLink
              to="https://courses.ooacademy.co.in/previous-year"
              label="Test Series"
            />
            <FooterLink
              to="https://courses.ooacademy.co.in/study-material"
              label="Free Ebook"
            />
            <FooterLink
              to="https://courses.ooacademy.co.in/study-material"
              label="Free Notes"
            />
            <FooterLink to="/live-lectures" label="Free Live Lectures" />
          </Grid>

          {/* Important Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography fontWeight={600} mb={2} fontSize={18}>
              Important Links
            </Typography>

            <FooterLink to="/about" label="About Us" />
            <FooterLink to="/contact" label="Contact Us" />
            <FooterLink to="/privacypolicy" label="Privacy Policy" />
            <FooterLink to="/terms" label="Terms & Conditions" />
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography fontWeight={600} mb={2} fontSize={18}>
              Contact Us
            </Typography>

            <Typography fontWeight={500} mb={2}>
              Maharashtra Talent Search Examination
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography fontSize={14}>
                N. Wadia College Campus, Pune - 1
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography fontSize={14}>
                (020) 26168486
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
              <Typography fontSize={14}>
                mahatestofficial@gmail.com
              </Typography>
            </Box>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" fontWeight={700} mb={3}>
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
                backgroundColor: "#fff",
                borderRadius: 1,
                mb: 2
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                background:
                  "linear-gradient(135deg,#ff9800,#ff5722)",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  background:
                    "linear-gradient(135deg,#ff5722,#ff9800)"
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
          backgroundColor: "#1a0f4d"
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md="auto">
              <Typography fontSize={14}>
                © {new Date().getFullYear()} MAHATEST. All rights reserved.
              </Typography>
            </Grid>

            <Grid item xs={12} md="auto">
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography
                  component={Link}
                  to="/privacypolicy"
                  sx={bottomLink}
                >
                  Privacy Policy
                </Typography>

                <Typography
                  component={Link}
                  to="/terms"
                  sx={bottomLink}
                >
                  Terms & Conditions
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

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
        "&:hover": {
          color: "#00e5ff"
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
  fontSize: 14,
  "&:hover": {
    textDecoration: "underline"
  }
};