import {
  Box,
  Container,
  Typography,
  Paper
} from "@mui/material";

export default function Terms() {
  return (
    <Box
      sx={{
        background: "#f4f6fb",
        minHeight: "100vh",
        pt: 12,
        pb: 8
      }}
    >
      <Container maxWidth="lg">

        {/* ===== GRADIENT HEADING ===== */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              background: "linear-gradient(90deg, #2e2bff, #7b1fa2)",
              color: "white",
              py: 3,
              borderRadius: 4,
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              TERMS & CONDITIONS
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              mt: 3,
              color: "#666",
              fontSize: "16px"
            }}
          >
            Please read these terms carefully before using MahaTest services.
          </Typography>
        </Box>

        {/* ===== CONTENT CARD ===== */}
        <Paper
          sx={{
            p: 5,
            borderRadius: 4,
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >
          <Typography paragraph>
            The terms “We”, “Us”, “Our” refer to MahaTest Examination Authority.
            By accessing this website and registering for MahaTest,
            you agree to comply with all rules and regulations mentioned here.
          </Typography>

          <Typography paragraph>
            MahaTest reserves the right to update or modify these Terms and
            Conditions at any time without prior notice. Continued use of the
            website signifies acceptance of updated terms.
          </Typography>

          <Typography paragraph>
            All content, logos, study material, question papers, and digital
            assets are intellectual property of MahaTest and are protected
            under applicable laws.
          </Typography>

          <Typography paragraph>
            Examination fees once paid are non-refundable. In case of unavoidable
            administrative or technical issues, MahaTest may reschedule the
            examination without refund obligations.
          </Typography>

          <Typography paragraph>
            Any student found involved in unfair practices, cheating,
            impersonation, or misconduct during the examination will be
            disqualified immediately.
          </Typography>

          <Typography paragraph>
            The decision of the MahaTest Examination Committee shall be final
            and binding in all matters related to examination and scholarship.
          </Typography>
        </Paper>

      </Container>
    </Box>
  );
}