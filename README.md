# Mood Music Suggestor

A web application that detects the user's mood and recommends music to refresh or improve their mood using AI sentiment analysis.

## Features

- Enter text describing your feelings or select from predefined moods (happy, sad, stressed, angry, relaxed)
- AI-powered emotion detection using HuggingFace API
- Dynamic music recommendations from Spotify API (with local fallback)
- Personalized song suggestions with Spotify links
- Save favorite songs locally for quick access
- Clean and responsive UI

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js with Express
- **AI:** HuggingFace emotion detection model
- **Music Data:** Spotify Web API (with local dataset fallback)

## Installation

1. Clone or download the project files.

2. Navigate to the project directory:
   ```
   cd music-mood-suggestor
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Copy and update the `.env` file with your credentials:
   ```
   cp .env.example .env
   ```
   Then edit `.env` to provide your Spotify and HuggingFace credentials.

5. (Optional) Configure APIs for improved recommendations:

   **Spotify (dynamic music recommendations)**
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Create a new app and get your Client ID and Client Secret
   - Set environment variables:
     ```powershell
     $env:SPOTIFY_CLIENT_ID = "your_client_id"
     $env:SPOTIFY_CLIENT_SECRET = "your_client_secret"
     ```
   - If not set, the app will use the local dataset as fallback.

   **HuggingFace (better sentiment analysis throughput)**
   - Create an account at https://huggingface.co/
   - Generate an API token
   - Set environment variable:
     ```powershell
     $env:HUGGINGFACE_API_KEY = "your_token"
     ```

   - If not set, the app will still work but may be subject to public API rate limits.

## Running the Application

1. Start the server:
   ```
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000`

3. The application will load the `index.html` file. Enter your mood or describe how you feel, and click "Get Recommendations".

## Deployment to Azure

### Prerequisites
- Azure CLI installed
- Azure subscription

### Steps
1. Update `.azure/main.parameters.json` with your Spotify credentials (optional)
2. Deploy using Azure CLI:
   ```
   az group create --name music-mood-suggestor-rg --location eastus
   az deployment group create --resource-group music-mood-suggestor-rg --template-file .azure/main.bicep --parameters .azure/main.parameters.json
   ```
3. The app will be available at the output URL (e.g., `https://music-mood-suggestor-xxx.azurewebsites.net`)

### Using the App
- Click **Login with Spotify** to authenticate and enable personalized recommendations and favorites.
- If not logged in, recommendations still work but favorites are stored locally in your browser.

### Using Azure Developer CLI (azd)
1. Install azd: `winget install Microsoft.AZD`
2. Run `azd up` in the project directory

## API Endpoint

- `POST /recommend`: Accepts JSON with `mood` (string) and/or `text` (string). Returns detected mood and song recommendations.

## Notes

- The HuggingFace API used for emotion detection may require an API token for heavy usage. If you encounter rate limits, sign up for a HuggingFace account and add your token to the server code.
- Music recommendations are from a local dataset. For production, consider integrating with Spotify API for more dynamic recommendations.

## Project Structure

```
music-mood-suggestor/
├── index.html      # Main HTML page
├── style.css       # Styles for the UI
├── script.js       # Frontend JavaScript
├── server.js       # Node.js Express server
├── package.json    # Dependencies and scripts
└── README.md       # This file
```