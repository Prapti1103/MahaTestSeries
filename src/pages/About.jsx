import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import padamsir from "../assets/padamSir.webp";
import pundeSir from "../assets/pundeSir.webp";
import chaureSir from "../assets/chaureSir.webp";
import dusaneSir from "../assets/dusaneSir.webp";
import kushalSir from "../assets/kushalSir.webp";

const faculty = [
  { name: "Padam Sir", image: padamsir },
  { name: "Punde Sir", image: pundeSir },
  { name: "Chaure Sir", image: chaureSir },
  { name: "Dusane Sir", image: dusaneSir },
  { name: "Kushal Sir", image: kushalSir }
];

export default function AboutUs() {
  return (
    <Box sx={{ backgroundColor: "#f4f6f9", minHeight: "100vh", py: 6 }}>

      {/* ===== GRADIENT HEADING LIKE EXAM INFO ===== */}
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(90deg, #2e2bff, #7b1fa2)",
            color: "white",
            py: 3,
            borderRadius: 4,
            textAlign: "center",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            mb: 6
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            ABOUT MAHATEST
          </Typography>
        </Box>
      </Container>

      {/* ===== CONTENT SECTION ===== */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h6" sx={{ color: "#555", lineHeight: 1.8 }}>
          MahaTest is an Online Competitive Exam Platform dedicated to
          empowering rural & underprivileged students across Maharashtra.
          Our mission is to provide quality education, structured guidance,
          and equal opportunities to every student.
        </Typography>

        <Typography sx={{ mt: 2, fontWeight: 600 }}>
          📞 Call Us: +91 8010457760
        </Typography>

        {/* Social Icons */}
        <Box sx={{ mt: 2 }}>
          <IconButton sx={{ color: "#1976d2" }}><InstagramIcon /></IconButton>
          <IconButton sx={{ color: "#1976d2" }}><FacebookIcon /></IconButton>
          <IconButton sx={{ color: "#1976d2" }}><TelegramIcon /></IconButton>
          <IconButton sx={{ color: "#1976d2" }}><TwitterIcon /></IconButton>
          <IconButton sx={{ color: "#1976d2" }}><YouTubeIcon /></IconButton>
        </Box>
      </Container>

      {/* ===== FACULTY SECTION ===== */}
      <Container maxWidth="lg">

        {/* Gradient Sub Heading */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #2e2bff, #7b1fa2)",
            color: "white",
            py: 2,
            borderRadius: 3,
            textAlign: "center",
            mb: 5
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            OUR EXPERT FACULTY
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {faculty.map((teacher, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  transition: "0.4s",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <Avatar
                  src={teacher.image}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mb: 2,
                    border: "4px solid #7b1fa2"
                  }}
                />

                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {teacher.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Dedicated to guiding students for Scholarship & Competitive Exams.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>

    </Box>
  );
}