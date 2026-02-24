import { Box, Typography } from "@mui/material";

export default function AnnouncementBar() {
  return (
    <Box
      sx={{
        background: "#f39c12",
        color: "#fff",
        py: 1,
        overflow: "hidden",
        whiteSpace: "nowrap",
        fontWeight: 600
      }}
    >
      <Typography
        sx={{
          display: "inline-block",
          animation: "scrollText 18s linear infinite",
          "@keyframes scrollText": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" }
          }
        }}
      >
        24 लाख रुपयांची भव्य महाराष्ट्र स्कॉलरशिप टेस्ट 2024 परीक्षा (ऑनलाईन मोफत) दिनांक लवकरच पहिला राऊंड होणार आहे.
      </Typography>
    </Box>
  );
}
