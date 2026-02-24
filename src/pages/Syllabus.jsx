/* eslint-disable react-hooks/static-components */
import {
  
  Container,
  Typography,
  Grid,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
  SpeedDial,
  SpeedDialAction
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ShareIcon from "@mui/icons-material/Share";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import { motion } from "framer-motion";
import { useState } from "react";
import { Box, Card, Paper, Fab } from "@mui/material";

export default function Syllabus() {

  /* ================= REPLACEABLE LINKS ================= */
  const PDF_LINK = "/pdfs/mste-syllabus-2026.pdf";   // 🔁 Replace PDF path
  const APPLY_LINK = "/register";                   // 🔁 Replace Apply route
  /* ==================================================== */

  // ===== MOVE THESE ABOVE COMPONENT =====
const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionFab = motion(Fab);

  
  

  return (
    <Box sx={{ background: "#f4f6fb", py: 8 }}>

      <Container maxWidth="lg">

        {/* ================= HERO ================= */}
        
        <MotionPaper
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          elevation={6}
          sx={{
            p: 6,
            mb: 6,
            textAlign: "center",
            borderRadius: 4,
            background:
              "linear-gradient(135deg, #25146b 0%, #4e73df 100%)",
            color: "#fff"
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            MSTE Exam Syllabus – 2026
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            2 लाख रुपयांची भव्य स्कॉलरशिप
          </Typography>
          <Chip
            label="ADVT: 01/2026"
            sx={{
              mt: 3,
              background: "#fff",
              color: "#25146b",
              fontWeight: "bold"
            }}
          />
        </MotionPaper>

        {/* ================= SCHOLARSHIP ================= */}
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Scholarship Structure
        </Typography>

        <Grid container spacing={4} mb={7}>
          {[
            { title: "Gold", amount: "₹24,000", color: "#FFD700" },
            { title: "Silver", amount: "₹12,000", color: "#C0C0C0" },
            { title: "Bronze", amount: "₹6,000", color: "#cd7f32" }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 4,
                  cursor: "pointer"
                }}
              >
                <EmojiEventsIcon
                  sx={{ fontSize: 50, color: item.color }}
                />
                <CardContent>
                  <Typography variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {item.amount}
                  </Typography>
                  <Typography variant="body2">
                    Monthly Scholarship
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* ================= EXAM PATTERN ================= */}
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Exam Pattern
        </Typography>

        <Paper sx={{ mb: 6, borderRadius: 3 }}>
          <Table>
            <TableHead sx={{ background: "#eee" }}>
              <TableRow>
                <TableCell><b>Subject</b></TableCell>
                <TableCell align="center"><b>Questions</b></TableCell>
                <TableCell align="center"><b>Marks</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                ["General Knowledge", 50, 50],
                ["English Grammar", 20, 20],
                ["Marathi Grammar", 20, 20],
                ["Intelligence Test", 10, 10],
              ].map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f1f8ff",
                      transition: "0.3s"
                    }
                  }}
                >
                  <TableCell>{row[0]}</TableCell>
                  <TableCell align="center">{row[1]}</TableCell>
                  <TableCell align="center">{row[2]}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ background: "#e3f2fd" }}>
                <TableCell><b>Total</b></TableCell>
                <TableCell align="center"><b>100</b></TableCell>
                <TableCell align="center"><b>100</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>

        {/* ================= CTA ================= */}
        <MotionBox textAlign="center" mt={6}>
          <Button
            variant="contained"
            size="large"
            href={APPLY_LINK}
            sx={{
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 3,
              background:
                "linear-gradient(45deg, #25146b, #4e73df)",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "0.3s"
              }
            }}
          >
            Apply Now
          </Button>
        </MotionBox>

      </Container>

      {/* ================= PREMIUM FLOATING PANEL ================= */}
     {/* ================= PROFESSIONAL FLOATING DOWNLOAD BUTTON ================= */}

<MotionBox
  initial={{ x: 120, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  sx={{
    position: "fixed",
    bottom: 30,
    right: 60,
    zIndex: 4000
  }}
>
  <Box
    component="a"
    href={PDF_LINK}          // 🔁 Replace if needed
    download
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      px: 3,
      py: 1.5,
      borderRadius: "50px",
      backdropFilter: "blur(15px)",
      background: "rgba(37,20,107,0.85)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 600,
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px) scale(1.05)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
        background: "linear-gradient(45deg,#25146b,#4e73df)"
      }
    }}
  >
    <PictureAsPdfIcon sx={{ fontSize: 24 }} />
    Download PDF
  </Box>
</MotionBox>

{/* ======================================================================= */}

    </Box>
  );
}