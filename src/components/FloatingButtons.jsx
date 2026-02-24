import { IconButton, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";

export default function FloatingButtons() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 999
      }}
    >
      {/* WhatsApp */}
      <IconButton
        href="https://wa.me/918010457760"
        target="_blank"
        sx={{
          background: "#25D366",
          color: "white",
          transition: "0.3s",
          "&:hover": { background: "#1ebe5b", transform: "scale(1.2)" }
        }}
      >
        <WhatsAppIcon />
      </IconButton>

      {/* Telegram */}
      <IconButton
        href="https://t.me/"
        target="_blank"
        sx={{
          background: "#0088cc",
          color: "white",
          transition: "0.3s",
          "&:hover": { background: "#0077b5", transform: "scale(1.2)" }
        }}
      >
        <TelegramIcon />
      </IconButton>

      {/* Call */}
      <IconButton
        href="tel:8010457760"
        sx={{
          background: "#ff4d4d",
          color: "white",
          transition: "0.3s",
          "&:hover": { background: "#e60000", transform: "scale(1.2)" }
        }}
      >
        <CallIcon />
      </IconButton>
    </Box>
  );
}
