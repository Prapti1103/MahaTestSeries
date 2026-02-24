import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <Box
      sx={{
        background: "#f4f6fb",
        minHeight: "100vh",
        pt: 10, // 🔥 pushes page down from announcement/navbar
        pb: 8
      }}
    >
      <Container maxWidth="md">

        {/* PROFESSIONAL TITLE BOX */}
        <Paper
          elevation={4}
          sx={{
            textAlign: "center",
            py: 4,
            mb: 6,
            borderRadius: 3,
            background: "linear-gradient(135deg,#1e2aff,#6a11cb)",
            color: "#fff"
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Frequently Asked Questions
          </Typography>

        </Paper>

        {/* FAQ CARD */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "#fff"
          }}
        >

          {/* FAQ 1 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                परीक्षा कशी होणार आहे? / How will the exam be conducted?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              MahaTest exam is conducted in Online mode (Round 1).
              The paper consists of objective type (MCQ) questions.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 2 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                परीक्षेची तारीख काय आहे? / What is the exam date?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              The exam is generally conducted in April.
              Exact dates are announced on the official website.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 3 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                परीक्षा किती गुणांची असेल? / How many marks will the exam be?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              • Mental Ability Test – 100 Marks<br/>
              • Scholastic Aptitude Test – 100 Marks<br/>
              Total: 200 Marks
            </AccordionDetails>
          </Accordion>

          {/* FAQ 4 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                पात्रता काय आहे? / Who can apply?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Students from Std. 4th to 10th studying in recognized schools
              across Maharashtra are eligible.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 5 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                नकारात्मक गुण आहेत का? / Is there negative marking?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              No negative marking. Each correct answer carries 1 mark.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 6 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                निकाल कसा जाहीर होईल? / How will results be declared?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Results will be published on the official MahaTest website.
              State & District merit lists will be released.
            </AccordionDetails>
          </Accordion>

          {/* FAQ 7 */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                बक्षिसे काय आहेत? / What are the prizes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              • Cash Prizes<br/>
              • Certificates<br/>
              • Trophies & Medals<br/>
              • Special Recognition Awards
            </AccordionDetails>
          </Accordion>

        </Paper>

      </Container>
    </Box>
  );
}