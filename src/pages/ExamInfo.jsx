import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventIcon from "@mui/icons-material/Event";
import StarIcon from "@mui/icons-material/Star";

import video1 from "../assets/video1.webp";
import video2 from "../assets/video2.webp";
import video3 from "../assets/video3.webp";
import video4 from "../assets/video4.webp";
import video5 from "../assets/video5.webp";
import video6 from "../assets/video6.webp";

const exams = [
  {
    title: "MahaTest Scholarship Strategy",
    thumbnail: video1,
    videoUrl: "https://www.youtube.com/watch?v=Y-ADBL4SJZ0",
    pdfUrl: "#"
  },
  {
    title: "Navodaya Entrance Preparation",
    thumbnail: video2,
    videoUrl: "https://youtu.be/OeL_6TFsdqc",
    pdfUrl: "#"
  },
  {
    title: "5th / 8th Scholarship Guidance",
    thumbnail: video3,
    videoUrl: "https://youtu.be/BTeg2ECRJbM",
    pdfUrl: "#"
  },
  {
    title: "English Scholarship Special",
    thumbnail: video4,
    videoUrl: "https://youtu.be/r9tlbF1Rvvw",
    pdfUrl: "#"
  },
  {
    title: "NMMS Complete Strategy",
    thumbnail: video5,
    videoUrl: "https://youtu.be/yTITgPdS19I",
    pdfUrl: "#"
  },
  {
    title: "JNVST Full Details",
    thumbnail: video6,
    videoUrl: "https://youtu.be/XBQD-BUWwgQ",
    pdfUrl: "#"
  }
];

export default function ExamInfo() {
  return (
    <Box sx={{ background: "#f4f6fb", py: 6 }}>
      <Container maxWidth="lg">

        {/* HERO SECTION */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            p: 5,
            borderRadius: 4,
            background: "linear-gradient(135deg,#1e2aff,#6a11cb)",
            color: "#fff",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom>
            MahaTest Examination Information
          </Typography>

        </Box>

        {/* ACCORDION SECTIONS */}

        {/* Eligibility */}
        <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SchoolIcon sx={{ mr: 2, color: "#1e2aff" }} />
            <Typography fontWeight={600}>Eligibility Criteria</Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Students from Std. 4th to 10th (recognized schools) can apply.<br/>
            • English / Marathi / Hindi medium allowed.<br/>
            • No previous attempt required for next class participation.<br/>
            • Strongly recommended for NTSE, NMMS & competitive exam aspirants.<br/><br/>
            MahaTest develops logical reasoning, analytical skills and academic excellence.
          </AccordionDetails>
        </Accordion>

        {/* Exam Pattern */}
        <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <MenuBookIcon sx={{ mr: 2, color: "#6a11cb" }} />
            <Typography fontWeight={600}>Examination Pattern & Marking Scheme</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <b>Paper 1 – Mental Ability Test (MAT)</b><br/>
            • 100 Questions – 100 Marks<br/>
            • 90 Minutes<br/><br/>

            <b>Paper 2 – Scholastic Aptitude Test (SAT)</b><br/>
            • Science – 40 Questions<br/>
            • Social Science – 40 Questions<br/>
            • Mathematics – 20 Questions<br/>
            • 100 Marks – 90 Minutes<br/><br/>

            <b>Marking:</b> +1 for correct answer, No negative marking.<br/>
            Interview (50 Marks) only for selected Std. 10 students.
          </AccordionDetails>
        </Accordion>

        {/* Rules */}
        <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <GavelIcon sx={{ mr: 2, color: "#ff9800" }} />
            <Typography fontWeight={600}>Rules & Regulations</Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Incomplete forms will be rejected.<br/>
            • Fees once paid will not be refunded.<br/>
            • Strict discipline during examination.<br/>
            • Any unfair means will lead to disqualification.<br/>
            • Decision of MahaTest Committee will be final.
          </AccordionDetails>
        </Accordion>

        {/* Important Dates */}
        <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <EventIcon sx={{ mr: 2, color: "#1976d2" }} />
            <Typography fontWeight={600}>Important Dates</Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Registration Starts: January<br/>
            • Last Date: March<br/>
            • Exam Date: April (Round 1 Online)<br/>
            • Results: June<br/>
            • Prize Ceremony: July
          </AccordionDetails>
        </Accordion>

        {/* Scholarships */}
        <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <EmojiEventsIcon sx={{ mr: 2, color: "#2e7d32" }} />
            <Typography fontWeight={600}>Results & Scholarships</Typography>
          </AccordionSummary>
          <AccordionDetails>
            • State & District Merit List published online.<br/>
            • Cash Prizes, Medals & Certificates.<br/>
            • Special Awards for Top Performers.<br/>
            • Scholarship Guidance & Career Support.
          </AccordionDetails>
        </Accordion>

        {/* Why Choose MahaTest */}
        <Accordion sx={{ mb: 6, borderRadius: 3, boxShadow: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <StarIcon sx={{ mr: 2, color: "#ff5722" }} />
            <Typography fontWeight={600}>Why Choose MahaTest?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            • Scientifically designed exam structure.<br/>
            • Competitive preparation from early age.<br/>
            • Performance analytics & ranking system.<br/>
            • Expert faculty guidance.<br/>
            • Trusted by thousands of students across Maharashtra.
          </AccordionDetails>
        </Accordion>

        <Divider sx={{ mb: 6 }} />

        {/* VIDEO SECTION */}
        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          sx={{ mb: 4 }}
        >
          Preparation & Guidance Videos
        </Typography>

        <Grid container spacing={4}>
          {exams.map((exam, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 4,
                  p: 2,
                  boxShadow: 4,
                  transition: "0.4s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 25px 40px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <Box
                  component="img"
                  src={exam.thumbnail}
                  alt={exam.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 3,
                    mb: 2
                  }}
                />

                <Chip
                  label={exam.title}
                  sx={{
                    background: "#e3e8ff",
                    fontWeight: 600,
                    mb: 2
                  }}
                />

                <Box sx={{ mt: "auto", display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#1e2aff",
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": { background: "#1420d4" }
                    }}
                    onClick={() => window.open(exam.videoUrl, "_blank")}
                  >
                    View
                  </Button>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#ff9800",
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": { background: "#e68900" }
                    }}
                    onClick={() => window.open(exam.pdfUrl, "_blank")}
                  >
                    PDF
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}