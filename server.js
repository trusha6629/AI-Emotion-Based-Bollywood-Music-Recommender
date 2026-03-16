const express = require('express');
const axios = require('axios');
const cors = require('cors');
const session = require('express-session');
const sqlite3 = require('sqlite3').verbose();
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');

// Load environment variables from .env
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Session setup (for logged-in users)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  })
);

// SQLite database setup (stores users and favorites)
const db = new sqlite3.Database(path.join(__dirname, 'data.db'));
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      spotify_id TEXT UNIQUE,
      display_name TEXT
    )`
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      track_id TEXT,
      title TEXT,
      artist TEXT,
      album TEXT,
      link TEXT,
      mood TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`
  );
});

// Spotify OAuth setup
const spotifyApiConfig = {
  clientId: process.env.SPOTIFY_CLIENT_ID || '',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
  redirectUri: process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/auth/spotify/callback'
};

const spotifyApi = new SpotifyWebApi(spotifyApiConfig);

function ensureLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.status(401).json({ error: 'Not authenticated' });
}

function mapEmotionsToMood(label) {
  const map = {
    joy: 'happy',
    sadness: 'sad',
    fear: 'stressed',
    anger: 'angry',
    neutral: 'relaxed',
    surprise: 'happy',
    disgust: 'angry'
  };
  return map[label] || 'relaxed';
}

const localSongs = {
  happy: [
    { title: 'Dhoom Dhadaka', artist: 'Amit Trivedi', album: 'Dhoom 3', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=6-1Ue0FFrHY' },
    { title: 'Badtameez Dil', artist: 'Benny Dayal, Shefali Alvares', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=3NpI3NZ0B1Q' },
    { title: 'Balam Pichkari', artist: 'Vishal Dadlani, Shalmali Kholgade', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=1Vd-9oUCBQQ' },
    { title: 'Subhanallah', artist: 'Sreerama Chandra, Shilpa Rao', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=0X7j8H9m3nE' },
    { title: 'Kabira', artist: 'Tochi Raina, Rekha Bhardwaj', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=jHNNMj5bNQw' }
  ],
  sad: [
    { title: 'Tujh Mein Rab Dikhta Hai', artist: 'Roop Kumar Rathod', album: 'Rab Ne Bana Di Jodi', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=8G1qfn4Q2KI' },
    { title: 'Pehla Nasha', artist: 'Udit Narayan, Sadhana Sargam', album: 'Jo Jeeta Wohi Sikandar', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=9XO0FgqjzQE' },
    { title: 'Tera Chehra', artist: 'Adnan Sami', album: 'Sanam Teri Kasam', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=8G1qfn4Q2KI' },
    { title: 'Jeena Jeena', artist: 'Atif Aslam', album: 'Badlapur', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=1Vd-9oUCBQQ' },
    { title: 'Channa Mereya', artist: 'Arijit Singh', album: 'Ae Dil Hai Mushkil', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=284Ov7ysmfA' }
  ],
  angry: [
    { title: 'Bheege Hont Tere', artist: 'Kunal Ganjawala, Antara Mitra', album: 'Murder', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=6-1Ue0FFrHY' },
    { title: 'Aashiq Banaya Aapne', artist: 'Himesh Reshammiya, Shreya Ghoshal', album: 'Aashiq Banaya Aapne', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=3NpI3NZ0B1Q' },
    { title: 'Kaate Nahi Kat Te', artist: 'Kamal Khan, Kishore Kumar', album: 'Mr. India', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=1Vd-9oUCBQQ' },
    { title: 'Dola Re Dola', artist: 'Kavita Krishnamurthy, Shreya Ghoshal', album: 'Devdas', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=0X7j8H9m3nE' },
    { title: 'Bheege Hont Tere', artist: 'Kunal Ganjawala', album: 'Murder', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=jHNNMj5bNQw' }
  ],
  relaxed: [
    { title: 'Tum Hi Ho', artist: 'Arijit Singh', album: 'Aashiqui 2', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=8G1qfn4Q2KI' },
    { title: 'Channa Mereya', artist: 'Arijit Singh', album: 'Ae Dil Hai Mushkil', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=284Ov7ysmfA' },
    { title: 'Jeena Jeena', artist: 'Atif Aslam', album: 'Badlapur', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=1Vd-9oUCBQQ' },
    { title: 'Pehla Nasha', artist: 'Udit Narayan', album: 'Jo Jeeta Wohi Sikandar', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=9XO0FgqjzQE' },
    { title: 'Tera Chehra', artist: 'Adnan Sami', album: 'Sanam Teri Kasam', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=8G1qfn4Q2KI' }
  ],
  surprised: [
    { title: 'Dhoom Dhadaka', artist: 'Amit Trivedi', album: 'Dhoom 3', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=6-1Ue0FFrHY' },
    { title: 'Badtameez Dil', artist: 'Benny Dayal, Shefali Alvares', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=3NpI3NZ0B1Q' },
    { title: 'Balam Pichkari', artist: 'Vishal Dadlani, Shalmali Kholgade', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=1Vd-9oUCBQQ' },
    { title: 'Subhanallah', artist: 'Sreerama Chandra, Shilpa Rao', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=0X7j8H9m3nE' },
    { title: 'Kabira', artist: 'Tochi Raina, Rekha Bhardwaj', album: 'Yeh Jawaani Hai Deewani', genre: 'Bollywood', link: 'https://www.youtube.com/watch?v=jHNNMj5bNQw' }
  ]
};

const moodQueries = {
  happy: 'happy upbeat Bollywood pop',
  sad: 'sad Bollywood acoustic calm',
  stressed: 'relaxing instrumental Bollywood lofi',
  angry: 'energetic Bollywood rock',
  relaxed: 'chill Bollywood ambient',
  surprised: 'happy upbeat Bollywood pop'
};

async function getSpotifySongs(mood, accessToken) {
  if (!accessToken) {
    return null;
  }

  try {
    spotifyApi.setAccessToken(accessToken);
    const query = moodQueries[mood] || 'chill';
    const data = await spotifyApi.searchTracks(query, { limit: 5 });
    return data.body.tracks.items.map(track => ({
      title: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      album: track.album.name,
      genre: 'Various',
      link: track.external_urls.spotify
    }));
  } catch (error) {
    console.error('Error fetching from Spotify:', error.message || error);
    return null;
  }
}

// Helper: get / set user in DB
function findOrCreateUser(spotifyId, displayName) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE spotify_id = ?', [spotifyId], (err, row) => {
      if (err) return reject(err);
      if (row) return resolve(row);

      db.run(
        'INSERT INTO users (spotify_id, display_name) VALUES (?, ?)',
        [spotifyId, displayName],
        function (insertErr) {
          if (insertErr) return reject(insertErr);
          db.get('SELECT * FROM users WHERE id = ?', [this.lastID], (err2, newRow) => {
            if (err2) return reject(err2);
            resolve(newRow);
          });
        }
      );
    });
  });
}

function getFavorites(userId) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM favorites WHERE user_id = ?', [userId], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

function addFavorite(userId, favorite) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO favorites (user_id, track_id, title, artist, album, link, mood) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userId, favorite.track_id, favorite.title, favorite.artist, favorite.album, favorite.link, favorite.mood],
      function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID, ...favorite });
      }
    );
  });
}

function removeFavorite(userId, favoriteId) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM favorites WHERE id = ? AND user_id = ?', [favoriteId, userId], function (err) {
      if (err) return reject(err);
      resolve({ deleted: this.changes > 0 });
    });
  });
}

// Spotify OAuth endpoints
app.get('/auth/spotify', (req, res) => {
  if (!spotifyApi || !spotifyApi.getClientId()) {
    return res.status(400).send('Spotify credentials not configured.');
  }

  const scopes = ['user-read-email'];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state');
  res.redirect(authorizeURL);
});

app.get('/auth/spotify/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send('Missing code from Spotify callback.');
  }

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token, expires_in } = data.body;

    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);

    const me = await spotifyApi.getMe();
    const user = await findOrCreateUser(me.body.id, me.body.display_name || me.body.id);

    req.session.user = {
      id: user.id,
      spotifyId: user.spotify_id,
      displayName: user.display_name,
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresAt: Date.now() + expires_in * 1000
    };

    res.redirect('/');
  } catch (error) {
    console.error('Spotify callback error:', error);
    res.status(500).send('Authentication failed.');
  }
});

app.get('/api/me', (req, res) => {
  if (!req.session.user) {
    return res.json({ user: null });
  }
  res.json({ user: req.session.user });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

app.get('/api/favorites', ensureLoggedIn, async (req, res) => {
  try {
    const favorites = await getFavorites(req.session.user.id);
    res.json({ favorites });
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).json({ error: 'Unable to load favorites' });
  }
});

app.post('/api/favorites', ensureLoggedIn, async (req, res) => {
  const { track_id, title, artist, album, link, mood } = req.body;
  if (!track_id || !title || !link) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const favorite = await addFavorite(req.session.user.id, { track_id, title, artist, album, link, mood });
    res.json({ favorite });
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ error: 'Unable to add favorite' });
  }
});

app.delete('/api/favorites/:id', ensureLoggedIn, async (req, res) => {
  try {
    const result = await removeFavorite(req.session.user.id, req.params.id);
    res.json(result);
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).json({ error: 'Unable to remove favorite' });
  }
});

app.post('/recommend', async (req, res) => {
  const { mood, text } = req.body;
  let detectedMood = mood;

  if (text) {
    try {
      const hfHeaders = { 'Content-Type': 'application/json' };
      if (process.env.HUGGINGFACE_API_KEY) {
        hfHeaders.Authorization = `Bearer ${process.env.HUGGINGFACE_API_KEY}`;
      }

      const response = await axios.post(
        'https://api-inference.huggingface.co/models/j-hartmann/emotion-english-distilroberta-base',
        { inputs: text },
        { headers: hfHeaders }
      );

      const emotions = response.data[0];
      const topEmotion = emotions.sort((a, b) => b.score - a.score)[0].label;
      detectedMood = mapEmotionsToMood(topEmotion);
    } catch (error) {
      console.error('Error detecting emotion:', error);
      detectedMood = mood || 'relaxed';
    }
  }

  let recommendations = null;
  let accessToken = null;

  if (req.session && req.session.user) {
    accessToken = req.session.user.accessToken;
  }

  if (accessToken) {
    recommendations = await getSpotifySongs(detectedMood, accessToken);
  }

  if (!recommendations) {
    console.log('Falling back to local songs');
    recommendations = localSongs[detectedMood] || localSongs.relaxed;
  }

  res.json({ mood: detectedMood, songs: recommendations });
});

// Serve static frontend
app.use(express.static(path.join(__dirname, '')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mood Music Suggestor server running on port ${PORT}`);
});
