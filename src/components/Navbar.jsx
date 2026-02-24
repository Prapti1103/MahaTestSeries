import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "https://courses.ooacademy.co.in/" },
  { label: "Syllabus", path: "/syllabus" },
  { label: "Score Ranking", path: "/ranking" },
  { label: "Exam Information", path: "/exam-info" },
  { label: "About Us", path: "/about" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#505b8b",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="MahaTest Logo"
              style={{
                height: "70px",
                width: "70px"
              }}
            />
          </Box>

          {/* NAV ITEMS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  position: "relative",
                  "&:hover": {
                    color: "#ffd700",
                    background: "transparent"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* REGISTER / LOGIN BUTTON */}
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                ml: 2,
                background: "linear-gradient(45deg, #ff9800, #ff5722)",
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: "30px",
                textTransform: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "0.3s ease",
                "&:hover": {
                  background: "linear-gradient(45deg, #ff5722, #ff9800)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
                }
              }}
            >
              Register / Login
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}