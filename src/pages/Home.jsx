import { Container, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import groupA from "../assets/groupA.webp";
import groupB from "../assets/groupB.webp";
import details from "../assets/details.webp";
import school from "../assets/school.webp";

const cardStyle = {
  background: "#f5f5f5",
  borderRadius: 3,
  p: 2,
  boxShadow: 3,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 25px rgba(0,0,0,0.15)"
  }
};

const imageStyle = {
  width: "100%",
  height: "260px",
  objectFit: "cover",
  borderRadius: "10px"
};

const blueBtn = {
  background: "#1e2aff",
  fontWeight: 600,
  flex: 1,
  textTransform: "none",
  "&:hover": { background: "#1420d4" }
};

const orangeBtn = {
  background: "#f39c12",
  fontWeight: 600,
  width: "60%",
  textTransform: "none",
  "&:hover": { background: "#e67e22" }
};

export default function Home() {

  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>

      {/* 🔵 FIRST ROW */}
      <Grid container spacing={4}>
        
        {/* GROUP A */}
        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <img src={groupA} style={imageStyle} alt="Group A" />

            {/* 🔥 BUTTONS IN ONE ROW */}
            <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/exam-info")}
              >
                View Exam Details
              </Button>

              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/syllabus")}
              >
                Syllabus PDF GROUP A
              </Button>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button
                variant="contained"
                sx={orangeBtn}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* GROUP B */}
        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <img src={groupB} style={imageStyle} alt="Group B" />

            {/* 🔥 BUTTONS IN ONE ROW */}
            <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/exam-info")}
              >
                View Exam Details
              </Button>

              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/syllabus")}
              >
                Syllabus PDF GROUP B
              </Button>
            </Box>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button
                variant="contained"
                sx={orangeBtn}
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>

      {/* 🔥 GAP BETWEEN ROWS */}
      <Box sx={{ mt: 6 }} />

      {/* 🔵 SECOND ROW */}
      <Grid container spacing={4}>

        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <img src={details} style={imageStyle} alt="Details" />

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/exam-info")}
              >
                SCHOLARSHIP EXAM ALL DETAILS
              </Button>

              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("https://courses.ooacademy.co.in/study-material")}
              >
                FREE NOTES
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={cardStyle}>
            <img src={school} style={imageStyle} alt="School" />

            <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("/exam-info")}
              >
                JOIN FREE CLASSES
              </Button>

              <Button
                variant="contained"
                sx={blueBtn}
                onClick={() => navigate("https://courses.ooacademy.co.in/study-material")}
              >
                FREE EBOOKS
              </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>

    </Container>
  );
}