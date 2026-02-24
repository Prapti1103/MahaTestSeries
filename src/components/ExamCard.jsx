import { Card, CardContent, Typography, Button, Box } from "@mui/material";


const ExamCard = ({ group, classes }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 5,
          p: 2,
          height: "100%"
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Group {group}
          </Typography>

          <Typography variant="body1" gutterBottom>
            Classes: {classes}
          </Typography>

          <Typography
            variant="h6"
            color="secondary"
            fontWeight="bold"
            sx={{ mt: 1 }}
          >
            Scholarship Worth ₹24 Lakhs
          </Typography>

          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button variant="outlined">View Details</Button>
            <Button variant="contained" color="secondary">
              Register
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExamCard;
