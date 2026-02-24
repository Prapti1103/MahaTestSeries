import { Box, Container, Typography, Paper } from "@mui/material";
import logo from "../assets/logo.png"; // apna logo path confirm karein

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        background: "#f2f2f2",
        minHeight: "100vh",
        py: 8
      }}
    >
      <Container maxWidth="md">

        <Paper
          elevation={3}
          sx={{
            p: 5,
            borderRadius: 3,
            background: "#fff"
          }}
        >

          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={logo}
              alt="MahaTest Logo"
              style={{ width: "120px" }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            sx={{ color: "#1976d2", mb: 4 }}
          >
            MahaTest Privacy Policy
          </Typography>

          {/* Content */}
          <Typography paragraph>
            1. MahaTest reserves the right to modify, suspend, or cancel
            the examination format, structure, and scholarship distribution
            process without prior notice under unavoidable circumstances.
          </Typography>

          <Typography paragraph>
            2. If there is any objection regarding examination questions,
            the final answer key published by MahaTest authority shall be
            considered binding and final.
          </Typography>

          <Typography paragraph>
            3. In case of any change in scholarship examination pattern,
            updates will be published on the official MahaTest website.
            Admission and scholarship procedures will continue as per
            updated guidelines.
          </Typography>

          <Typography paragraph>
            4. Students found involved in unfair practices, misconduct,
            cheating, or providing false information will be disqualified
            from the examination and scholarship benefits.
          </Typography>

          <Typography paragraph>
            5. All information provided during registration must be accurate.
            If incorrect details are found at any stage, MahaTest reserves
            the right to cancel the student's result and participation.
          </Typography>

          <Typography paragraph>
            6. MahaTest collects basic personal information such as name,
            contact number, email address and academic details solely for
            examination and scholarship purposes.
          </Typography>

          <Typography paragraph>
            7. MahaTest does not share personal data with third parties
            except where required by law or examination administration.
          </Typography>

          <Typography paragraph>
            8. All notifications, circulars, updates, and official decisions
            issued by MahaTest committee from time to time shall be binding
            on all participating students.
          </Typography>

          <Typography paragraph>
            9. By registering for MahaTest examination, the student agrees
            to abide by all rules, regulations and privacy guidelines.
          </Typography>

        </Paper>

      </Container>
    </Box>
  );
}