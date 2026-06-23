const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

process.stdout.on("error", (error) => {
  if (error.code !== "EPIPE") {
    throw error;
  }
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

const songsByMood = {
  happy: [
    { title: "Blinding Lights", artist: "The Weeknd", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80" },
    { title: "Levitating", artist: "Dua Lipa", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" },
    { title: "Good as Hell", artist: "Lizzo", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
    { title: "Feel It Still", artist: "Portugal. The Man", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80" }
  ],
  sad: [
    { title: "Fix You", artist: "Coldplay", image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=900&q=80" },
    { title: "Someone Like You", artist: "Adele", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80" },
    { title: "The Night We Met", artist: "Lord Huron", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80" },
    { title: "Ocean Eyes", artist: "Billie Eilish", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" }
  ],
  angry: [
    { title: "Believer", artist: "Imagine Dragons", image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=900&q=80" },
    { title: "Stronger", artist: "Kanye West", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=900&q=80" },
    { title: "DNA.", artist: "Kendrick Lamar", image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=900&q=80" },
    { title: "Numb", artist: "Linkin Park", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80" }
  ],
  calm: [
    { title: "Sunset Lover", artist: "Petit Biscuit", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" },
    { title: "Bloom", artist: "The Paper Kites", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80" },
    { title: "Holocene", artist: "Bon Iver", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80" },
    { title: "Weightless", artist: "Marconi Union", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80" }
  ]
};

app.use(express.static(__dirname));
app.use("/songs", express.static(path.join(__dirname, "songs")));
app.use("/models", express.static(path.join(__dirname, "models")));
app.use(
  "/vendor/face-api.min.js",
  express.static(path.join(__dirname, "node_modules", "face-api.js", "dist", "face-api.min.js"))
);

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/songs/:mood", (req, res) => {
  const mood = req.params.mood;
  res.json({
    mood: songsByMood[mood] ? mood : "calm",
    songs: songsByMood[mood] || songsByMood.calm
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.use((error, req, res, next) => {
  console.error("Unhandled server error:", error);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("face-api.js emotion detection runs in the browser.");
});
