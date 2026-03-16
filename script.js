// Emotion Detection + Bollywood Song Suggestion
// This script provides a fixed list of Bollywood songs and allows the user to click a song to play it via a Spotify embed.

const spotifySongs = {
  neutral: [
    { title: "Iktara", id: "0H2iJVgorRR0ZFgRqGUjUM" },
    { title: "Kesariya", id: "4UMIv5jd9g1d7CqW3l0nqV" }
  ],
  happy: [
    { title: "Badtameez Dil", id: "6FjbAnaPRPwiP3sciEYctO" },
    { title: "Gallan Goodiyan", id: "1CkvWZme3pRgbzaxZnTl5X" }
  ],
  sad: [
    { title: "Tum Hi Ho", id: "2Khk1Xo6Kxk8K8fZfL9Z0F" },
    { title: "Channa Mereya", id: "5HCyWlXZPP0y6Gqq8TgA20" }
  ],
  angry: [
    { title: "Apna Time Aayega", id: "2nLtzopw4rPReszdYBJU6h" },
    { title: "Malhari", id: "3ZFTkvIE7kyPt6Nu3PEa7V" }
  ]
};

let currentEmotion = 'neutral';
let currentSongIndex = -1;

function getSongsForEmotion(emotion) {
  return spotifySongs[emotion] || spotifySongs.neutral;
}

function selectRandomIndex(arrayLength, excludeIndex) {
  if (arrayLength <= 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * arrayLength);
  } while (idx === excludeIndex);
  return idx;
}

function ensureSongListExists() {
  let songList = document.getElementById('songList');
  if (!songList) {
    songList = document.createElement('div');
    songList.id = 'songList';
    const musicPlayer = document.getElementById('musicPlayer');
    if (musicPlayer) {
      musicPlayer.insertBefore(songList, musicPlayer.firstChild);
    } else {
      document.body.appendChild(songList);
    }
  }
  return songList;
}

function suggestSongs(emotion) {
  const key = spotifySongs[emotion] ? emotion : 'neutral';
  currentEmotion = key;

  const songs = getSongsForEmotion(key);
  currentSongIndex = -1;

  const songList = ensureSongListExists();

  const title = document.createElement('h3');
  title.textContent = 'Recommended Songs';

  const list = document.createElement('ul');
  list.style.listStyleType = 'none';
  list.style.padding = '0';

  songs.forEach((song, index) => {
    const item = document.createElement('li');
    item.style.cursor = 'pointer';
    item.style.margin = '8px 0';
    item.style.padding = '8px';
    item.style.border = '1px solid rgba(0,0,0,0.1)';
    item.style.borderRadius = '6px';
    item.style.background = 'rgba(0,0,0,0.03)';

    item.textContent = song.title;
    item.onclick = () => {
      currentSongIndex = index;
      playSong(song.id);
    };

    list.appendChild(item);
  });

  songList.innerHTML = '';
  songList.appendChild(title);
  songList.appendChild(list);

  // Auto-play the first song in the list (optional UX improvement)
  if (songs.length > 0) {
    currentSongIndex = 0;
    playSong(songs[0].id);
  }
}

function playSong(trackId) {
  const iframe = document.createElement('iframe');
  iframe.style.borderRadius = '12px';
  iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
  iframe.width = '100%';
  iframe.height = '152';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';

  const playerDiv = document.getElementById('player');
  if (playerDiv) {
    playerDiv.innerHTML = '';
    playerDiv.appendChild(iframe);
  }
}

function playNextSong() {
  const songs = getSongsForEmotion(currentEmotion);
  if (!songs || songs.length === 0) return;

  const nextIndex = selectRandomIndex(songs.length, currentSongIndex);
  currentSongIndex = nextIndex;
  playSong(songs[nextIndex].id);
}

// Emotion Detection Code
const video = document.getElementById('video');
const emotionDisplay = document.getElementById('emotionDisplay');
const detectBtn = document.getElementById('detectEmotionBtn');
let emotionInterval;

async function loadModels() {
  try {
    console.log('Loading face-api models...');
    await faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights/');
    await faceapi.nets.faceExpressionNet.loadFromUri('https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights/');
    console.log('Models loaded successfully');
    startVideo();
  } catch (err) {
    console.error('Error loading models:', err);
    if (emotionDisplay) {
      emotionDisplay.textContent = 'Failed to load emotion detection models.';
    }
  }
}

async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (video) {
      video.srcObject = stream;
      await video.play();
      console.log('Webcam started successfully');
    }
  } catch (err) {
    console.error('Error accessing webcam:', err);
    if (emotionDisplay) {
      emotionDisplay.textContent = 'Webcam access denied or not available.';
    }
  }
}

async function detectEmotion() {
  try {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    console.log('Detections:', detections);
    if (detections.length > 0) {
      const expressions = detections[0].expressions;
      const emotion = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
      const mappedEmotion = spotifySongs[emotion] ? emotion : 'neutral';
      console.log('Detected emotion:', emotion, '(mapped to', mappedEmotion + ')');
      if (emotionDisplay) {
        emotionDisplay.textContent = `Detected emotion: ${mappedEmotion}`;
      }
      suggestSongs(mappedEmotion);
    } else {
      if (emotionDisplay) {
        emotionDisplay.textContent = 'No face detected. Please ensure your face is visible in the webcam.';
      }
    }
  } catch (err) {
    console.error('Error detecting emotion:', err);
    if (emotionDisplay) {
      emotionDisplay.textContent = 'Error detecting emotion.';
    }
  }
}

if (detectBtn) {
  detectBtn.addEventListener('click', () => {
    if (emotionInterval) {
      clearInterval(emotionInterval);
      detectBtn.textContent = 'Detect Emotion';
      emotionInterval = null;
    } else {
      detectEmotion(); // Initial detection
      emotionInterval = setInterval(detectEmotion, 5000); // Update every 5 seconds
      detectBtn.textContent = 'Stop Detection';
    }
  });
}

const nextSongBtn = document.getElementById('nextSongBtn');
if (nextSongBtn) {
  nextSongBtn.addEventListener('click', () => {
    playNextSong();
  });
}

// Load models on page load
loadModels();
