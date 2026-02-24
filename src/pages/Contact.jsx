import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <Box sx={{ background: "#f4f6fb", minHeight: "100vh", py: 6 }}>
      <Container>

       

        <Grid container spacing={5}>

          {/* LEFT SIDE - INFO CARDS */}
          <Grid item xs={12} md={6}>
            {/* ONE GRID FOR 4 BOXES */}
            <Grid container columnSpacing={4} rowSpacing={8}>

              {/* OPEN HOURS */}
              <Grid item xs={12} sm={6}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <AccessTimeIcon sx={iconStyle} />
                    <Typography variant="h6" fontWeight="bold">
                      Open Hours
                    </Typography>
                    <Typography color="text.secondary">
                      Monday - Sunday
                    </Typography>
                    <Typography color="text.secondary">
                      9:00AM - 10:00PM
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* CALL US */}
              <Grid item xs={12} sm={6}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <PhoneIcon sx={iconStyle} />
                    <Typography variant="h6" fontWeight="bold">
                      Call Us
                    </Typography>
                    <Typography color="text.secondary">
                      +91 8329588625
                    </Typography>
                    <Typography color="text.secondary">
                      +91 8010457760
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* EMAIL */}
              <Grid item xs={12} sm={6}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <EmailIcon sx={iconStyle} />
                    <Typography variant="h6" fontWeight="bold">
                      Email Us
                    </Typography>
                    <Typography color="text.secondary">
                      ooacademypune1@gmail.com
                    </Typography>
                    <Typography color="text.secondary">
                      padam3005@gmail.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* ADDRESS */}
              <Grid item xs={12} sm={6}>
                <Card sx={cardStyle}>
                  <CardContent>
                    <LocationOnIcon sx={iconStyle} />
                    <Typography variant="h6" fontWeight="bold">
                      Address
                    </Typography>
                    <Typography color="text.secondary">
                      OOAcademy, Lokmanya Bal
                      Gangadhar Tilak Road,
                      in front of Hira Photo Digital Lab,
                      Sadashiv Peth, Pune,
                      Maharashtra 411030
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Grid>

          {/* RIGHT SIDE - FORM */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, borderRadius: 3, boxShadow: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button
                    variant="contained"
                    sx={{
                      background: "linear-gradient(45deg,#4e54c8,#8f94fb)",
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      borderRadius: 2,
                      "&:hover": {
                        background: "linear-gradient(45deg,#3b3fc4,#7a7ff5)"
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

        </Grid>

        {/* MAP */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Our Location
          </Typography>

          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 4
            }}
          >
            <iframe
              title="OOAcademy Location"
              src="https://www.google.com/maps?q=Sadashiv+Peth,+Pune,+Maharashtra+411030&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}

/* STYLES */
const cardStyle = {
  borderRadius: 3,
  boxShadow: 3,
  p: 3,
  height: "100%",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
  }
};

const iconStyle = {
  fontSize: 40,
  color: "#4e54c8",
  mb: 1
};