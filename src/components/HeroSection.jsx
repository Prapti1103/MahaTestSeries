import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Register", path: "/register" },
  { label: "Courses", path: "/courses" },
  { label: "Syllabus", path: "/syllabus" },
  { label: "Score Ranking", path: "/ranking" },
  { label: "Exam Information", path: "/exam-info" },
  
  { label: "About Us", path: "/about" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ background: "#0d1ec6" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="MahaTest Logo" height="40" />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { color: "#ffcc00" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
