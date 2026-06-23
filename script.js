const MODEL_URL = "/models";
const THEME_STORAGE_KEY = "moodMusicTheme";
const LANGUAGE_STORAGE_KEY = "moodMusicLanguage";
const UI_LANGUAGE = "en";

const languages = {
  en: { label: "English", htmlLang: "en" },
  hi: { label: "हिन्दी", htmlLang: "hi" },
  gu: { label: "ગુજરાતી", htmlLang: "gu" }
};

languages.hi.label = "Hindi";
languages.gu.label = "Gujarati";

const themes = {
  dark: {
    icon: "🌙",
    label: { en: "Dark", hi: "डार्क", gu: "ડાર્ક" },
    nextLabel: { en: "Switch to light mode", hi: "लाइट मोड करें", gu: "લાઇટ મોડ કરો" }
  },
  light: {
    icon: "☀️",
    label: { en: "Light", hi: "लाइट", gu: "લાઇટ" },
    nextLabel: { en: "Switch to dark mode", hi: "डार्क मोड करें", gu: "ડાર્ક મોડ કરો" }
  }
};

const translations = {
  en: {
    heroEyebrow: "AI-powered music intelligence",
    heroIntro: "A futuristic music assistant that studies your expression, locks a stable mood, and recommends music for that moment.",
    startCamera: "Start Camera",
    stopCamera: "Turn Off Camera",
    cameraOff: "Camera off",
    cameraOffText: "Camera is off. Tap the camera button to begin.",
    cameraPlaceholderTitle: "Tap to start camera",
    cameraPlaceholderCopy: "Turn on the webcam when you are ready, then let the AI analyze your expression for a few seconds.",
    loadingModels: "Loading face-api.js models...",
    analyzing: "Analyzing your mood...",
    requestingCamera: "Requesting camera access...",
    startingCamera: "Starting camera",
    preparingAi: "Preparing AI",
    cameraLive: "Camera live",
    lookingForFace: "Looking for your face...",
    browserReady: "Browser emotion detection ready",
    detectionRunning: "Professional face-api.js analysis running in browser",
    detectionHint: "Keep your face centered with steady lighting. The AI will lock one reliable mood after analysis.",
    idleHint: "Start the camera to load face-api.js models and analyze your expression.",
    noFace: "No face detected",
    findFace: "Find face",
    noFaceText: "No face detected. Move into the frame and keep good lighting.",
    cameraReady: "Camera Ready",
    analyzeMood: "Analyze Mood",
    analyzeAgain: "Analyze Again",
    analyzingMood: "Analyzing Mood...",
    detectingExpressions: "Detecting Expressions...",
    moodLocked: "Mood locked",
    moodDetectedSuccess: "Mood Detected Successfully",
    confidenceTooLow: "Expression confidence is low. Hold a natural expression and analyze again.",
    unstableExpression: "Expression changed too much. Keep your face steady and analyze again.",
    faceNotCentered: "Please face the camera clearly",
    lightingTooLow: "Lighting is too low",
    moveCloser: "Move closer to the camera",
    moveBack: "Move back slightly",
    liveWaiting: "Camera Analysis Waiting",
    liveActive: "AI Analysis Active",
    loadingButton: "Loading Models...",
    idle: "Idle",
    detected: "Detected",
    recommendationTitle: "Recommended For You",
    recommendationSubtitle: "Songs that match your mood and selected language",
    explanationEyebrow: "AI Mood Insight",
    explanationWaitingTitle: "Waiting for expression data",
    explanationWaitingText: "Start the camera and MoodMusic AI will explain why a mood was detected.",
    confidence: "Confidence",
    expressionSignals: "Expression signals",
    selectSong: "Select a song",
    playerReady: "Your in-app player is ready",
    playerAria: "Play or pause selected song",
    actionNeeded: "Action needed",
    detectionUnavailable: "Emotion detection unavailable.",
    setupAttention: "face-api.js setup needs attention",
    fixIssue: "Fix the issue and start the camera again.",
    moodLabels: {
      happy: "You look happy.",
      sad: "You look sad.",
      angry: "You look intense.",
      calm: "You look calm."
    },
    moodMessages: {
      happy: "You seem happy today! 🎶",
      sad: "You seem reflective today. Here are songs that understand the feeling. 🎶",
      angry: "You seem intense today. These tracks turn that fire into focus. 🎶",
      calm: "You seem calm today. Here are relaxing tracks for your mood. 🎶"
    },
    categories: {
      happy: "Uplifting",
      sad: "Emotional",
      angry: "Power",
      calm: "Relaxing"
    },
    moods: {
      happy: "Happy",
      sad: "Sad",
      angry: "Angry",
      calm: "Calm"
    },
    explanationTitles: {
      happy: "😊 Happy Mood Detected",
      sad: "😢 Sad Mood Detected",
      angry: "🔥 Intense Mood Detected",
      calm: "😌 Calm Mood Detected"
    },
    explanations: {
      happy: "You appear happy because your expression shows a stronger smile signal, lifted cheek energy, and relaxed facial movement patterns.",
      sad: "Your expression appears softer and lower-energy, with subtle facial signals that can point to a sad or reflective mood.",
      angry: "Your expression looks more intense, with tension-like signals that often align with focus, frustration, or an angry mood.",
      calm: "Your face appears balanced and relaxed, with neutral expression signals and steady facial movement."
    }
  },
  hi: {
    heroEyebrow: "AI-संचालित संगीत अनुभव",
    heroIntro: "एक भविष्यवादी संगीत सहायक जो कैमरे से आपका भाव पढ़कर तुरंत गाने सुझाता है।",
    startCamera: "कैमरा शुरू करें",
    stopCamera: "कैमरा बंद करें",
    cameraOff: "कैमरा बंद",
    cameraOffText: "कैमरा बंद है। शुरू करने के लिए कैमरा बटन दबाएं।",
    cameraPlaceholderTitle: "कैमरा शुरू करें",
    cameraPlaceholderCopy: "जब आप तैयार हों, कैमरा ऑन करें और लाइव मूड डिटेक्शन देखें।",
    loadingModels: "face-api.js मॉडल लोड हो रहे हैं...",
    analyzing: "आपका मूड विश्लेषित हो रहा है...",
    requestingCamera: "कैमरा अनुमति मांगी जा रही है...",
    startingCamera: "कैमरा शुरू हो रहा है",
    preparingAi: "AI तैयार हो रहा है",
    cameraLive: "कैमरा लाइव",
    lookingForFace: "आपका चेहरा खोजा जा रहा है...",
    browserReady: "ब्राउज़र इमोशन डिटेक्शन तैयार है",
    detectionRunning: "ब्राउज़र में रियल-टाइम face-api.js डिटेक्शन चल रहा है",
    detectionHint: "अपना चेहरा फ्रेम में रखें। मूड और गाने अपने आप अपडेट होंगे।",
    idleHint: "face-api.js मॉडल लोड करने और भाव पहचानने के लिए कैमरा शुरू करें।",
    noFace: "चेहरा नहीं मिला",
    findFace: "चेहरा दिखाएं",
    noFaceText: "चेहरा नहीं मिला। फ्रेम में आएं और रोशनी अच्छी रखें।",
    liveWaiting: "लाइव डिटेक्शन प्रतीक्षा में",
    liveActive: "लाइव डिटेक्शन चालू",
    loadingButton: "मॉडल लोड हो रहे हैं...",
    idle: "निष्क्रिय",
    detected: "पहचाना गया",
    recommendationTitle: "आपके लिए सुझाव",
    recommendationSubtitle: "आपके मूड और चुनी हुई भाषा के अनुसार गाने",
    explanationEyebrow: "AI मूड इनसाइट",
    explanationWaitingTitle: "एक्सप्रेशन डेटा का इंतज़ार",
    explanationWaitingText: "कैमरा शुरू करें और MoodMusic AI बताएगा कि यह मूड क्यों पहचाना गया।",
    confidence: "कॉन्फिडेंस",
    expressionSignals: "एक्सप्रेशन संकेत",
    selectSong: "एक गाना चुनें",
    playerReady: "इन-ऐप प्लेयर तैयार है",
    playerAria: "चुने हुए गाने को चलाएं या रोकें",
    actionNeeded: "ध्यान दें",
    detectionUnavailable: "इमोशन डिटेक्शन उपलब्ध नहीं है।",
    setupAttention: "face-api.js सेटअप पर ध्यान चाहिए",
    fixIssue: "समस्या ठीक करें और कैमरा फिर से शुरू करें।",
    moodLabels: {
      happy: "आप खुश लग रहे हैं।",
      sad: "आप उदास लग रहे हैं।",
      angry: "आप गंभीर लग रहे हैं।",
      calm: "आप शांत लग रहे हैं।"
    },
    moodMessages: {
      happy: "आप आज खुश लग रहे हैं! 🎶",
      sad: "आप आज थोड़े भावुक लग रहे हैं। ये गाने आपके एहसास के लिए हैं। 🎶",
      angry: "आपमें आज तेज ऊर्जा दिख रही है। ये गाने उसे फोकस में बदलेंगे। 🎶",
      calm: "आप आज शांत लग रहे हैं। ये सुकूनभरे गाने आपके लिए हैं। 🎶"
    },
    categories: {
      happy: "जोशीले",
      sad: "भावुक",
      angry: "पावर",
      calm: "सुकून"
    },
    moods: {
      happy: "खुश",
      sad: "उदास",
      angry: "तेज",
      calm: "शांत"
    },
    explanationTitles: {
      happy: "😊 खुश मूड पहचाना गया",
      sad: "😢 उदास मूड पहचाना गया",
      angry: "🔥 तीव्र मूड पहचाना गया",
      calm: "😌 शांत मूड पहचाना गया"
    },
    explanations: {
      happy: "आप खुश लग रहे हैं क्योंकि आपके चेहरे पर मुस्कान का संकेत, गालों की हल्की उठान और रिलैक्स्ड एक्सप्रेशन पैटर्न दिख रहे हैं।",
      sad: "आपका चेहरा थोड़ा शांत और कम ऊर्जा वाला लग रहा है, जो उदास या विचारशील मूड का संकेत दे सकता है।",
      angry: "आपका एक्सप्रेशन ज्यादा तीव्र दिख रहा है, जिसमें तनाव जैसे संकेत हैं जो फोकस, निराशा या गुस्से से जुड़ सकते हैं।",
      calm: "आपके चेहरे के भाव संतुलित और रिलैक्स्ड दिख रहे हैं, जिनमें न्यूट्रल संकेत और स्थिर facial movement है।"
    }
  },
  gu: {
    heroEyebrow: "AI આધારિત સંગીત અનુભવ",
    heroIntro: "કેમેરા દ્વારા તમારો ભાવ વાંચીને તરત જ ગીતો સૂચવનાર આધુનિક સંગીત સહાયક.",
    startCamera: "કેમેરા શરૂ કરો",
    stopCamera: "કેમેરા બંધ કરો",
    cameraOff: "કેમેરા બંધ",
    cameraOffText: "કેમેરા બંધ છે. શરૂ કરવા માટે કેમેરા બટન દબાવો.",
    cameraPlaceholderTitle: "કેમેરા શરૂ કરો",
    cameraPlaceholderCopy: "તમે તૈયાર હો ત્યારે વેબકેમ ચાલુ કરો અને જીવંત મૂડ ડિટેક્શન જુઓ.",
    loadingModels: "face-api.js મોડેલ લોડ થઈ રહ્યા છે...",
    analyzing: "તમારો મૂડ વિશ્લેષિત થઈ રહ્યો છે...",
    requestingCamera: "કેમેરાની પરવાનગી માગી રહ્યા છીએ...",
    startingCamera: "કેમેરા શરૂ થઈ રહ્યો છે",
    preparingAi: "AI તૈયાર થઈ રહ્યું છે",
    cameraLive: "કેમેરા લાઇવ",
    lookingForFace: "તમારો ચહેરો શોધી રહ્યા છીએ...",
    browserReady: "બ્રાઉઝર ઇમોશન ડિટેક્શન તૈયાર છે",
    detectionRunning: "બ્રાઉઝરમાં રિયલ-ટાઇમ face-api.js ડિટેક્શન ચાલી રહ્યું છે",
    detectionHint: "તમારો ચહેરો ફ્રેમમાં રાખો. મૂડ અને ગીતો આપમેળે બદલાશે.",
    idleHint: "face-api.js મોડેલ લોડ કરવા અને ભાવ ઓળખવા માટે કેમેરા શરૂ કરો.",
    noFace: "ચહેરો મળ્યો નથી",
    findFace: "ચહેરો બતાવો",
    noFaceText: "ચહેરો મળ્યો નથી. ફ્રેમમાં આવો અને પ્રકાશ સારો રાખો.",
    liveWaiting: "લાઇવ ડિટેક્શન રાહમાં",
    liveActive: "લાઇવ ડિટેક્શન ચાલુ",
    loadingButton: "મોડેલ લોડ થઈ રહ્યા છે...",
    idle: "નિષ્ક્રિય",
    detected: "ઓળખાયું",
    recommendationTitle: "તમારા માટે ભલામણો",
    recommendationSubtitle: "તમારા મૂડ અને પસંદ કરેલી ભાષા પ્રમાણે ગીતો",
    explanationEyebrow: "AI મૂડ ઇનસાઇટ",
    explanationWaitingTitle: "એક્સપ્રેશન ડેટાની રાહ",
    explanationWaitingText: "કેમેરા શરૂ કરો અને MoodMusic AI સમજાવશે કે આ મૂડ કેમ ઓળખાયો.",
    confidence: "વિશ્વાસ",
    expressionSignals: "એક્સપ્રેશન સંકેતો",
    selectSong: "ગીત પસંદ કરો",
    playerReady: "ઇન-એપ પ્લેયર તૈયાર છે",
    playerAria: "પસંદ કરેલ ગીત ચલાવો અથવા રોકો",
    actionNeeded: "ધ્યાન આપો",
    detectionUnavailable: "ઇમોશન ડિટેક્શન ઉપલબ્ધ નથી.",
    setupAttention: "face-api.js સેટઅપને ધ્યાન જોઈએ",
    fixIssue: "સમस्या ઠીક કરો અને કેમેરા ફરી શરૂ કરો.",
    moodLabels: {
      happy: "તમે ખુશ દેખાઈ રહ્યા છો.",
      sad: "તમે ઉદાસ દેખાઈ રહ્યા છો.",
      angry: "તમારી ઊર્જા તીવ્ર લાગે છે.",
      calm: "તમે શાંત દેખાઈ રહ્યા છો."
    },
    moodMessages: {
      happy: "તમે આજે ખુશ દેખાઈ રહ્યા છો! 🎶",
      sad: "તમે આજે થોડા ભાવુક દેખાઈ રહ્યા છો. આ ગીતો તમારા ભાવ માટે છે. 🎶",
      angry: "તમારી અંદર આજે તીવ્ર ઊર્જા છે. આ ગીતો તેને ફોકસમાં ફેરવશે. 🎶",
      calm: "તમે આજે શાંત દેખાઈ રહ્યા છો. આ આરામદાયક ગીતો તમારા માટે છે. 🎶"
    },
    categories: {
      happy: "આનંદમય",
      sad: "ભાવુક",
      angry: "પાવર",
      calm: "શાંત"
    },
    moods: {
      happy: "ખુશ",
      sad: "ઉદાસ",
      angry: "તીવ્ર",
      calm: "શાંત"
    },
    explanationTitles: {
      happy: "😊 ખુશ મૂડ ઓળખાયો",
      sad: "😢 ઉદાસ મૂડ ઓળખાયો",
      angry: "🔥 તીવ્ર મૂડ ઓળખાયો",
      calm: "😌 શાંત મૂડ ઓળખાયો"
    },
    explanations: {
      happy: "તમે ખુશ દેખાઈ રહ્યા છો કારણ કે તમારા ચહેરા પર સ્મિતનો મજબૂત સંકેત, ગાલની હળવી ઊંચાઈ અને આરામદાયક અભિવ્યક્તિ દેખાય છે.",
      sad: "તમારી અભિવ્યક્તિ નરમ અને ઓછી ઊર્જાવાળી લાગે છે, જે ઉદાસ અથવા વિચારશીલ મૂડ બતાવી શકે છે.",
      angry: "તમારી અભિવ્યક્તિ વધુ તીવ્ર લાગે છે, જેમાં તણાવ જેવા સંકેતો છે જે ફોકસ, નિરાશા અથવા ગુસ્સા સાથે જોડાઈ શકે છે.",
      calm: "તમારા ચહેરાના ભાવ સંતુલિત અને આરામદાયક લાગે છે, જેમાં ન્યુટ્રલ સંકેતો અને સ્થિર facial movement દેખાય છે."
    }
  }
};

function makeSong(title, artist, album, language, mood, youtubeId, durationSeconds) {
  return {
    title,
    artist,
    album,
    language,
    moodCategory: mood,
    youtubeId,
    durationSeconds,
    poster: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${youtubeId}`
  };
}

const recommendationCatalog = {
  en: {
    happy: [
      makeSong("Happy", "Pharrell Williams", "G I R L", "English", "happy", "ZbZSe6N_BXs", 233),
      makeSong("Can't Stop the Feeling!", "Justin Timberlake", "Trolls", "English", "happy", "ru0K8uYEZWw", 296),
      makeSong("Levitating", "Dua Lipa", "Future Nostalgia", "English", "happy", "TUVcZfQe-Kw", 203)
    ],
    sad: [
      makeSong("Someone Like You", "Adele", "21", "English", "sad", "hLQl3WQQoQ0", 285),
      makeSong("Fix You", "Coldplay", "X&Y", "English", "sad", "k4V3Mo61fJM", 294),
      makeSong("Let Her Go", "Passenger", "All the Little Lights", "English", "sad", "RBumgq5yVrA", 252)
    ],
    angry: [
      makeSong("Believer", "Imagine Dragons", "Evolve", "English", "angry", "7wtfhZwyrcc", 216),
      makeSong("Stronger", "Kanye West", "Graduation", "English", "angry", "PsO6ZnUZI0g", 311),
      makeSong("Hall of Fame", "The Script ft. will.i.am", "#3", "English", "angry", "mk48xRzuNvA", 202)
    ],
    calm: [
      makeSong("Perfect", "Ed Sheeran", "Divide", "English", "calm", "2Vv-BfVoq4g", 280),
      makeSong("Yellow", "Coldplay", "Parachutes", "English", "calm", "yKNxeF4KMsY", 267),
      makeSong("Memories", "Maroon 5", "Jordi", "English", "calm", "SlPhMPnQ58k", 189)
    ]
  },
  hi: {
    happy: [
      makeSong("Kesariya", "Arijit Singh", "Brahmastra", "Hindi", "happy", "BddP6PYo2gs", 268),
      makeSong("Gallan Goodiyaan", "Yashita Sharma, Farhan Akhtar", "Dil Dhadakne Do", "Hindi", "happy", "jCEdTq3j-0U", 297),
      makeSong("Kar Gayi Chull", "Badshah, Neha Kakkar", "Kapoor & Sons", "Hindi", "happy", "NTHz9ephYTw", 187)
    ],
    sad: [
      makeSong("Channa Mereya", "Arijit Singh", "Ae Dil Hai Mushkil", "Hindi", "sad", "284Ov7ysmfA", 229),
      makeSong("Agar Tum Saath Ho", "Alka Yagnik, Arijit Singh", "Tamasha", "Hindi", "sad", "sK7riqg2mr4", 341),
      makeSong("Tum Hi Ho", "Arijit Singh", "Aashiqui 2", "Hindi", "sad", "Umqb9KENgmk", 267)
    ],
    angry: [
      makeSong("Apna Time Aayega", "Ranveer Singh, Dub Sharma", "Gully Boy", "Hindi", "angry", "jFGKJBPFdUA", 154),
      makeSong("Sultan Title Track", "Sukhwinder Singh, Shadab Faridi", "Sultan", "Hindi", "angry", "wPxqcq6Byq0", 280),
      makeSong("Chak De India", "Sukhwinder Singh", "Chak De! India", "Hindi", "angry", "6a0-dSMWm5g", 283)
    ],
    calm: [
      makeSong("Iktara", "Kavita Seth, Amit Trivedi", "Wake Up Sid", "Hindi", "calm", "fSS_R91Nimw", 255),
      makeSong("Phir Se Ud Chala", "Mohit Chauhan", "Rockstar", "Hindi", "calm", "2mWaqsC3U7k", 270),
      makeSong("Kho Gaye Hum Kahan", "Jasleen Royal, Prateek Kuhad", "Baar Baar Dekho", "Hindi", "calm", "fT3YWCKvuQE", 219)
    ]
  },
  gu: {
    happy: [
      makeSong("Khalasi", "Aditya Gadhvi, Achint", "Coke Studio Bharat", "Gujarati", "happy", "t7wSjy9Lv-o", 258),
      makeSong("Gori Radha Ne Kalo Kaan", "Kirtidan Gadhvi", "Wrong Side Raju", "Gujarati", "happy", "ccqg6e2rfLU", 270),
      makeSong("Chogada", "Darshan Raval, Asees Kaur", "Loveyatri", "Gujarati", "happy", "BzcKINXf-rs", 249)
    ],
    sad: [
      makeSong("Tari Aankh No Afini", "Manhar Udhas", "Gujarati Classics", "Gujarati", "sad", "WzGj7q-nPME", 301),
      makeSong("Laadki", "Kirtidan Gadhvi", "Coke Studio", "Gujarati", "sad", "Tx72UKvp8OI", 392),
      makeSong("Pankhida Ne Aa Pinjru", "Praful Dave", "Gujarati Bhajans", "Gujarati", "sad", "SY49lzHmL58", 265)
    ],
    angry: [
      makeSong("Jai Adhyashakti", "Ratansinh Vaghela, Damyanti Barot", "Gujarati Bhakti Songs", "Gujarati", "angry", "U_DTkSAakVQ", 430),
      makeSong("Vishvambhari Stuti", "Kinjal Dave", "Gujarati Devotional", "Gujarati", "angry", "MYkEYAoqFTs", 362),
      makeSong("Mor Bani Thanghat Kare", "Osman Mir", "Gujarati Garba", "Gujarati", "angry", "AZDxptWUutM", 244)
    ],
    calm: [
      makeSong("Vhalam Aavo Ne", "Jigardan Gadhavi, Sachin-Jigar", "Love Ni Bhavai", "Gujarati", "calm", "Ai1du5CG85g", 319),
      makeSong("Lili Lemdi Re", "Osman Mir", "Gujarati Jalso", "Gujarati", "calm", "f79O37ZLPRo", 375),
      makeSong("Radha Ne Shyam Mali Jashe", "Sachin-Jigar", "Gujarati Romantic", "Gujarati", "calm", "tTfF5klskmo", 246)
    ]
  }
};

const expressionToMood = {
  happy: "happy",
  sad: "sad",
  angry: "angry",
  neutral: "calm"
};

const emotionDetectionConfig = {
  analysisDurationMs: 3000,
  frameDelayMs: 200,
  minFinalConfidence: 0.6,
  minFaceScore: 0.35
};

const state = {
  streamStarted: false,
  modelsLoaded: false,
  activeStream: null,
  isDetectingFrame: false,
  analysisInProgress: false,
  moodLocked: false,
  analysisRunId: 0,
  currentMood: "calm",
  currentLanguage: "en",
  songRenderTimer: null,
  latestExpressionData: null,
  currentSongKey: "",
  currentSong: null,
  isPlaying: false,
  progressTimer: null,
  elapsedSeconds: 0
};

const els = {
  webcam: document.getElementById("webcam"),
  cameraToggleBtn: document.getElementById("cameraToggleBtn"),
  cameraToggleText: document.getElementById("cameraToggleText"),
  detectMoodBtn: document.getElementById("detectMoodBtn"),
  moodResult: document.getElementById("moodResult"),
  moodMessage: document.getElementById("moodMessage"),
  moodLabel: document.getElementById("moodLabel"),
  songGrid: document.getElementById("songGrid"),
  loadingIndicator: document.getElementById("loadingIndicator"),
  loadingText: document.getElementById("loadingText"),
  cameraFrame: document.getElementById("cameraFrame"),
  cameraOverlayText: document.getElementById("cameraOverlayText"),
  cameraStatusBadge: document.getElementById("cameraStatusBadge"),
  backendStatus: document.getElementById("backendStatus"),
  cameraHint: document.getElementById("cameraHint"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  themeToggleIcon: document.getElementById("themeToggleIcon"),
  themeToggleText: document.getElementById("themeToggleText"),
  languageSelect: document.getElementById("languageSelect"),
  languageOptions: document.querySelectorAll("[data-language-option]"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroIntro: document.getElementById("heroIntro"),
  cameraPlaceholderTitle: document.getElementById("cameraPlaceholderTitle"),
  cameraPlaceholderCopy: document.getElementById("cameraPlaceholderCopy"),
  recommendationTitle: document.getElementById("recommendationTitle"),
  recommendationSubtitle: document.getElementById("recommendationSubtitle"),
  aiExplanationCard: document.getElementById("aiExplanationCard"),
  aiExplanationIcon: document.getElementById("aiExplanationIcon"),
  aiExplanationEyebrow: document.getElementById("aiExplanationEyebrow"),
  aiExplanationTitle: document.getElementById("aiExplanationTitle"),
  aiExplanationText: document.getElementById("aiExplanationText"),
  confidenceLabel: document.getElementById("confidenceLabel"),
  confidencePercent: document.getElementById("confidencePercent"),
  confidenceBar: document.getElementById("confidenceBar"),
  musicPlayer: document.getElementById("musicPlayer"),
  playerThumbnail: document.getElementById("playerThumbnail"),
  playerTitle: document.getElementById("playerTitle"),
  playerArtist: document.getElementById("playerArtist"),
  playerPlayPauseBtn: document.getElementById("playerPlayPauseBtn"),
  playerPlayIcon: document.getElementById("playerPlayIcon"),
  playerPauseIcon: document.getElementById("playerPauseIcon"),
  playerProgressBar: document.getElementById("playerProgressBar"),
  playerCurrentTime: document.getElementById("playerCurrentTime"),
  playerDuration: document.getElementById("playerDuration"),
  playerMoodBadge: document.getElementById("playerMoodBadge"),
  playerLanguageBadge: document.getElementById("playerLanguageBadge"),
  youtubePlayer: document.getElementById("youtubePlayer")
};

function t(key) {
  return translations[UI_LANGUAGE][key] || key;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function getStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return themes[storedTheme] ? storedTheme : "dark";
}

function getStoredLanguage() {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return languages[storedLanguage] ? storedLanguage : "en";
}

function applyTheme(theme) {
  const nextTheme = themes[theme] ? theme : "dark";
  document.body.setAttribute("data-theme", nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme") || getStoredTheme();
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function updateLanguageOptions() {
  els.languageOptions.forEach((option) => {
    const isActive = option.dataset.languageOption === state.currentLanguage;
    option.className = isActive
      ? "language-option text-primary font-bold border-b-2 border-primary pb-1 font-body-lg text-body-lg bg-transparent border-x-0 border-t-0 shadow-none p-0"
      : "language-option text-on-surface-variant font-medium font-body-lg text-body-lg hover:text-primary transition-colors duration-300 bg-transparent border-0 shadow-none p-0";
    option.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function updateStaticCopy() {
  document.documentElement.lang = languages[UI_LANGUAGE].htmlLang;
  els.heroEyebrow.textContent = t("heroEyebrow");
  els.heroIntro.textContent = t("heroIntro");
  els.cameraPlaceholderTitle.textContent = t("cameraPlaceholderTitle");
  els.cameraPlaceholderCopy.textContent = t("cameraPlaceholderCopy");
  els.loadingText.textContent = t("analyzing");
  els.recommendationTitle.textContent = t("recommendationTitle");
  els.recommendationSubtitle.textContent = t("recommendationSubtitle");
  els.aiExplanationEyebrow.textContent = t("explanationEyebrow");
  els.playerPlayPauseBtn.setAttribute("aria-label", t("playerAria"));

  if (!state.currentSong) {
    els.playerTitle.textContent = t("selectSong");
    els.playerArtist.textContent = t("playerReady");
  }

  applyTheme(getStoredTheme());
  updateCameraVisualState(state.streamStarted);
  updateMoodCopy();
  updateMoodExplanation(state.latestExpressionData);
  updatePlayerBadges();
}

function applyLanguage(language) {
  state.currentLanguage = languages[language] ? language : "en";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, state.currentLanguage);
  els.languageSelect.value = state.currentLanguage;
  updateLanguageOptions();
  resetPlayerSelection();
  updateStaticCopy();
  renderSongs(state.currentMood);
}

function updateCameraVisualState(isActive) {
  els.cameraFrame.classList.toggle("is-active", isActive);
  els.cameraToggleBtn.setAttribute("aria-pressed", String(isActive));
  els.cameraToggleBtn.setAttribute("aria-label", isActive ? t("stopCamera") : t("startCamera"));
  els.cameraToggleText.textContent = isActive ? t("stopCamera") : t("startCamera");
}

function setLoadingState(isLoading, message = t("loadingModels")) {
  els.loadingIndicator.classList.toggle("hidden", !isLoading);
  els.loadingIndicator.setAttribute("aria-hidden", String(!isLoading));
  els.cameraFrame.classList.toggle("detecting", isLoading);
  if (isLoading) {
    els.detectMoodBtn.disabled = true;
    els.detectMoodBtn.textContent = t("loadingButton");
  } else {
    updateDetectionButtonState();
  }

  if (isLoading) {
    els.backendStatus.textContent = message;
    els.cameraStatusBadge.textContent = t("preparingAi");
    els.cameraOverlayText.textContent = message;
  }
}

function updateDetectionButtonState() {
  if (!state.streamStarted) {
    els.detectMoodBtn.disabled = true;
    els.detectMoodBtn.textContent = t("liveWaiting");
    return;
  }

  if (state.analysisInProgress) {
    els.detectMoodBtn.disabled = true;
    els.detectMoodBtn.textContent = t("analyzingMood");
    return;
  }

  els.detectMoodBtn.disabled = false;
  els.detectMoodBtn.textContent = state.moodLocked ? t("analyzeAgain") : t("analyzeMood");
}

function waitForVideoReady() {
  if (els.webcam.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && els.webcam.videoWidth > 0) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Camera did not become ready in time."));
    }, 5000);

    function cleanup() {
      window.clearTimeout(timeout);
      els.webcam.removeEventListener("loadedmetadata", handleReady);
      els.webcam.removeEventListener("canplay", handleReady);
    }

    function handleReady() {
      cleanup();
      resolve();
    }

    els.webcam.addEventListener("loadedmetadata", handleReady, { once: true });
    els.webcam.addEventListener("canplay", handleReady, { once: true });
  });
}

async function loadFaceModels() {
  if (state.modelsLoaded) {
    return;
  }

  if (!window.faceapi) {
    throw new Error("face-api.js did not load. Check /vendor/face-api.min.js.");
  }

  setLoadingState(true);
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
  ]);
  state.modelsLoaded = true;
}

async function startWebcam() {
  if (state.streamStarted) {
    return true;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    showError("This browser does not support webcam access.");
    els.cameraStatusBadge.textContent = "Camera unavailable";
    return false;
  }

  try {
    els.cameraToggleBtn.disabled = true;
    els.cameraStatusBadge.textContent = t("startingCamera");
    els.cameraOverlayText.textContent = t("requestingCamera");

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
        width: { ideal: 640 },
        height: { ideal: 480 }
      },
      audio: false
    });

    state.activeStream = stream;
    els.webcam.srcObject = stream;
    await els.webcam.play();
    await waitForVideoReady();
    await loadFaceModels();

    state.streamStarted = true;
    updateCameraVisualState(true);
    state.moodLocked = false;
    els.cameraStatusBadge.textContent = t("cameraReady");
    els.cameraOverlayText.textContent = t("lookingForFace");
    els.backendStatus.textContent = t("browserReady");
    els.cameraHint.textContent = t("detectionHint");
    updateDetectionButtonState();
    return true;
  } catch (error) {
    stopWebcam();
    showError(error.message || "Camera or model loading failed.");
    els.cameraStatusBadge.textContent = "Setup failed";
    return false;
  } finally {
    els.cameraToggleBtn.disabled = false;
    setLoadingState(false);
  }
}

function stopWebcam() {
  stopMoodAnalysis();

  if (state.activeStream) {
    state.activeStream.getTracks().forEach((track) => track.stop());
    state.activeStream = null;
  }

  els.webcam.srcObject = null;
  state.streamStarted = false;
  state.latestExpressionData = null;
  state.moodLocked = false;
  els.cameraFrame.classList.remove("detecting");
  updateCameraVisualState(false);
  updateDetectionButtonState();
  els.moodLabel.textContent = t("idle");
  els.backendStatus.textContent = t("cameraOff");
  els.cameraStatusBadge.textContent = t("cameraOff");
  els.cameraOverlayText.textContent = t("cameraOffText");
  els.cameraHint.textContent = t("idleHint");
  updateMoodExplanation(null);
}

function stopMoodAnalysis() {
  state.analysisRunId += 1;
  state.analysisInProgress = false;
  state.isDetectingFrame = false;
  els.loadingIndicator.classList.add("hidden");
  els.loadingIndicator.setAttribute("aria-hidden", "true");
  els.cameraFrame.classList.remove("detecting");
  updateDetectionButtonState();
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getStrongestExpression(expressions) {
  const candidates = ["happy", "sad", "angry", "neutral"].map((expression) => ({
    expression,
    confidence: expressions?.[expression] || 0
  }));

  return candidates.reduce((best, current) => (
    current.confidence > best.confidence ? current : best
  ));
}

function getVideoBrightness() {
  const canvas = document.createElement("canvas");
  const width = 80;
  const height = 60;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context || !els.webcam.videoWidth || !els.webcam.videoHeight) {
    return 100;
  }

  canvas.width = width;
  canvas.height = height;
  context.drawImage(els.webcam, 0, 0, width, height);

  const pixels = context.getImageData(0, 0, width, height).data;
  let total = 0;

  for (let index = 0; index < pixels.length; index += 4) {
    total += (pixels[index] * 0.2126) + (pixels[index + 1] * 0.7152) + (pixels[index + 2] * 0.0722);
  }

  return total / (pixels.length / 4);
}

function getFaceQualityIssue(result) {
  if (!result) {
    return {
      key: "noFaceText",
      badge: "findFace"
    };
  }

  if ((result.detection.score || 0) < emotionDetectionConfig.minFaceScore) {
    return {
      key: "faceNotCentered",
      badge: "findFace"
    };
  }

  return null;
}

async function captureExpressionSample() {
  if (!state.streamStarted || !state.modelsLoaded || state.isDetectingFrame) {
    return null;
  }

  state.isDetectingFrame = true;

  try {
    const result = await faceapi
      .detectSingleFace(
        els.webcam,
        new faceapi.TinyFaceDetectorOptions({
          inputSize: 224,
          scoreThreshold: emotionDetectionConfig.minFaceScore
        })
      )
      .withFaceExpressions();

    const qualityIssue = getFaceQualityIssue(result);
    if (qualityIssue) {
      return {
        usable: false,
        reason: qualityIssue
      };
    }

    const detected = getStrongestExpression(result.expressions);

    return {
      usable: true,
      expression: detected.expression,
      mood: expressionToMood[detected.expression],
      confidence: detected.confidence,
      expressions: result.expressions
    };
  } finally {
    state.isDetectingFrame = false;
  }
}

function getLockedMoodFromSamples(samples) {
  const usableSamples = samples.filter((sample) => sample.usable);
  const supportedExpressions = ["happy", "sad", "angry", "neutral"];

  if (!usableSamples.length) {
    return {
      mood: "calm",
      expression: "neutral",
      confidence: emotionDetectionConfig.minFinalConfidence,
      signals: getExpressionSummary({ happy: 0, sad: 0, angry: 0, neutral: emotionDetectionConfig.minFinalConfidence }),
      sampleCount: 0,
      consistency: 1
    };
  }

  const totals = supportedExpressions.reduce((result, expression) => {
    result[expression] = {
      expression,
      mood: expressionToMood[expression],
      count: 0,
      confidenceTotal: 0
    };
    return result;
  }, {});

  usableSamples.forEach((sample) => {
    totals[sample.expression].count += 1;

    supportedExpressions.forEach((expression) => {
      totals[expression].confidenceTotal += sample.expressions?.[expression] || 0;
    });
  });

  const ranked = Object.values(totals).sort((first, second) => {
    const firstAverage = first.confidenceTotal / usableSamples.length;
    const secondAverage = second.confidenceTotal / usableSamples.length;
    const firstMajority = first.count / usableSamples.length;
    const secondMajority = second.count / usableSamples.length;
    const firstScore = firstAverage + (firstMajority * 0.25);
    const secondScore = secondAverage + (secondMajority * 0.25);

    return secondScore - firstScore;
  });

  const winner = ranked[0];
  const averagedExpressions = Object.fromEntries(
    supportedExpressions.map((expression) => [
      expression,
      totals[expression].confidenceTotal / usableSamples.length
    ])
  );
  const consistency = winner.count / usableSamples.length;
  const averageConfidence = averagedExpressions[winner.expression] || emotionDetectionConfig.minFinalConfidence;

  return {
    mood: winner.mood,
    expression: winner.expression,
    confidence: Math.max(emotionDetectionConfig.minFinalConfidence, Math.min(0.99, (averageConfidence * 0.75) + (consistency * 0.25))),
    signals: getExpressionSummary(averagedExpressions),
    sampleCount: usableSamples.length,
    consistency
  };
}

async function analyzeMoodOnce() {
  if (!state.streamStarted || !state.modelsLoaded || state.analysisInProgress) {
    return;
  }

  const runId = state.analysisRunId + 1;
  state.analysisRunId = runId;
  state.analysisInProgress = true;
  state.moodLocked = false;
  state.latestExpressionData = null;
  const samples = [];
  const startedAt = performance.now();

  els.loadingIndicator.classList.remove("hidden");
  els.loadingIndicator.setAttribute("aria-hidden", "false");
  els.loadingText.textContent = t("analyzingMood");
  els.cameraFrame.classList.add("detecting");
  els.backendStatus.textContent = t("analyzingMood");
  els.cameraStatusBadge.textContent = t("cameraReady");
  els.cameraOverlayText.textContent = t("detectingExpressions");
  els.moodLabel.textContent = t("detectingExpressions");
  updateDetectionButtonState();

  try {
    while (
      state.streamStarted &&
      state.analysisRunId === runId &&
      performance.now() - startedAt < emotionDetectionConfig.analysisDurationMs
    ) {
      const sample = await captureExpressionSample();

      if (sample) {
        samples.push(sample);
        if (!sample.usable && sample.reason) {
          els.cameraStatusBadge.textContent = t(sample.reason.badge);
          els.cameraOverlayText.textContent = t(sample.reason.key);
        } else {
          els.cameraStatusBadge.textContent = t("detectingExpressions");
          els.cameraOverlayText.textContent = `${t("detectingExpressions")} ${samples.filter((item) => item.usable).length} frames`;
        }
      }

      await sleep(emotionDetectionConfig.frameDelayMs);
    }

    if (!state.streamStarted || state.analysisRunId !== runId) {
      return;
    }

    const lockedResult = getLockedMoodFromSamples(samples);

    const expressionData = {
      mood: lockedResult.mood,
      expression: lockedResult.expression,
      confidence: lockedResult.confidence,
      signals: lockedResult.signals,
      sampleCount: lockedResult.sampleCount,
      consistency: lockedResult.consistency
    };

    state.moodLocked = true;
    applyMood(lockedResult.mood, lockedResult.expression, lockedResult.confidence, expressionData);
    els.cameraStatusBadge.textContent = t("moodLocked");
    els.cameraOverlayText.textContent = t("moodDetectedSuccess");
    els.backendStatus.textContent = t("moodDetectedSuccess");
    els.cameraHint.textContent = t("moodLocked");
  } catch (error) {
    showError(error.message || "Expression detection failed.");
  } finally {
    if (state.analysisRunId === runId) {
      state.analysisInProgress = false;
      els.loadingIndicator.classList.add("hidden");
      els.loadingIndicator.setAttribute("aria-hidden", "true");
      els.cameraFrame.classList.remove("detecting");
      updateDetectionButtonState();
    }
  }
}

function getExpressionSummary(expressions) {
  return ["happy", "sad", "angry", "neutral"]
    .map((expression) => ({
      expression,
      mood: expressionToMood[expression],
      confidence: expressions?.[expression] || 0
    }))
    .sort((a, b) => b.confidence - a.confidence);
}

function getMoodIcon(mood) {
  return {
    happy: "😊",
    sad: "😢",
    angry: "🔥",
    calm: "😌"
  }[mood] || "🧠";
}

function getMoodExplanationText(mood, expressionData) {
  const baseExplanation = translations[UI_LANGUAGE].explanations[mood];

  if (!expressionData?.signals?.length) {
    return baseExplanation;
  }

  const signals = expressionData.signals
    .slice(0, 2)
    .map((signal) => `${translations[UI_LANGUAGE].moods[signal.mood]} ${Math.round(signal.confidence * 100)}%`)
    .join(" • ");

  const stabilityNote = expressionData.sampleCount
    ? ` Stable across ${expressionData.sampleCount} frames with ${Math.round((expressionData.consistency || 0) * 100)}% consistency.`
    : "";

  return `${baseExplanation} ${t("expressionSignals")}: ${signals}.${stabilityNote}`;
}

function updateMoodExplanation(expressionData) {
  const moodCopy = translations[UI_LANGUAGE];
  const mood = expressionData?.mood || state.currentMood;
  const confidence = expressionData?.confidence || 0;
  const confidencePercent = Math.round(confidence * 100);

  els.aiExplanationIcon.textContent = expressionData ? getMoodIcon(mood) : "🧠";
  els.aiExplanationTitle.textContent = expressionData
    ? moodCopy.explanationTitles[mood]
    : t("explanationWaitingTitle");
  els.aiExplanationText.textContent = expressionData
    ? getMoodExplanationText(mood, expressionData)
    : t("explanationWaitingText");
  els.confidenceLabel.textContent = expressionData
    ? `${t("confidence")}: ${confidencePercent}% ${moodCopy.moods[mood]}`
    : `${t("confidence")}: --`;
  els.confidencePercent.textContent = expressionData ? `${confidencePercent}%` : "--%";
  els.confidenceBar.style.width = expressionData ? `${confidencePercent}%` : "0%";
  els.aiExplanationCard.classList.toggle("has-insight", Boolean(expressionData));
  els.aiExplanationCard.classList.remove("is-refreshing");
  void els.aiExplanationCard.offsetWidth;
  els.aiExplanationCard.classList.add("is-refreshing");
}

function getSongsForMood(mood) {
  return recommendationCatalog[state.currentLanguage]?.[mood] || recommendationCatalog.en.calm;
}

function getSongKey(song) {
  return `${song.language}-${song.title}-${song.album}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getSongEmbedUrl(song) {
  const params = new URLSearchParams({
    autoplay: "1",
    enablejsapi: "1",
    playsinline: "1",
    rel: "0"
  });

  if (window.location.origin.startsWith("http")) {
    params.set("origin", window.location.origin);
  }

  return `${song.embedUrl}?${params.toString()}`;
}

function sendPlayerCommand(command) {
  if (!els.youtubePlayer.contentWindow) {
    return;
  }

  els.youtubePlayer.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: command, args: [] }),
    "*"
  );
}

function updatePlayerBadges() {
  els.playerMoodBadge.textContent = translations[UI_LANGUAGE].moods[state.currentMood];
  els.playerLanguageBadge.textContent = languages[state.currentLanguage].label;
}

function updatePlayerControls(nextIsPlaying) {
  state.isPlaying = nextIsPlaying;
  els.playerPlayIcon.classList.toggle("hidden", state.isPlaying);
  els.playerPauseIcon.classList.toggle("hidden", !state.isPlaying);
  els.musicPlayer.classList.toggle("is-playing", state.isPlaying);
}

function startProgressAnimation() {
  window.clearInterval(state.progressTimer);
  state.elapsedSeconds = 0;
  els.playerProgressBar.style.width = "0%";
  els.playerCurrentTime.textContent = "0:00";

  state.progressTimer = window.setInterval(() => {
    if (!state.currentSong) {
      return;
    }

    state.elapsedSeconds = Math.min(state.elapsedSeconds + 1, state.currentSong.durationSeconds);
    const progress = (state.elapsedSeconds / state.currentSong.durationSeconds) * 100;
    els.playerProgressBar.style.width = `${progress}%`;
    els.playerCurrentTime.textContent = formatTime(state.elapsedSeconds);

    if (state.elapsedSeconds >= state.currentSong.durationSeconds) {
      state.elapsedSeconds = 0;
    }
  }, 1000);
}

function stopProgressAnimation() {
  window.clearInterval(state.progressTimer);
  state.progressTimer = null;
}

function resetPlayerSelection() {
  stopProgressAnimation();
  state.currentSong = null;
  state.currentSongKey = "";
  state.isPlaying = false;
  state.elapsedSeconds = 0;

  els.youtubePlayer.removeAttribute("src");
  els.playerThumbnail.src = "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg";
  els.playerThumbnail.alt = "Selected song poster";
  els.playerTitle.textContent = t("selectSong");
  els.playerArtist.textContent = t("playerReady");
  els.playerDuration.textContent = "--:--";
  els.playerCurrentTime.textContent = "0:00";
  els.playerProgressBar.style.width = "0%";
  els.playerPlayPauseBtn.disabled = true;
  els.playerPlayIcon.classList.remove("hidden");
  els.playerPauseIcon.classList.add("hidden");
  els.musicPlayer.classList.remove("has-song", "is-playing");
}

function setActiveSongCard(songKey) {
  document.querySelectorAll(".song-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.songKey === songKey);
  });
}

function loadSongIntoPlayer(song) {
  state.currentSong = song;
  state.currentSongKey = getSongKey(song);
  els.playerThumbnail.src = song.poster;
  els.playerThumbnail.alt = `${song.title} poster`;
  els.playerTitle.textContent = song.title;
  els.playerArtist.textContent = `${song.artist} • ${song.album}`;
  els.playerDuration.textContent = formatTime(song.durationSeconds);
  els.youtubePlayer.src = getSongEmbedUrl(song);
  els.playerPlayPauseBtn.disabled = false;
  els.musicPlayer.classList.add("has-song");
  setActiveSongCard(state.currentSongKey);
  updatePlayerBadges();
  updatePlayerControls(true);
  startProgressAnimation();
}

function togglePlayerPlayback() {
  if (!state.currentSongKey) {
    return;
  }

  if (state.isPlaying) {
    sendPlayerCommand("pauseVideo");
    stopProgressAnimation();
    updatePlayerControls(false);
    return;
  }

  sendPlayerCommand("playVideo");
  startProgressAnimation();
  updatePlayerControls(true);
}

function createSongCard(song, mood, index) {
  const card = document.createElement("article");
  card.className = "song-card";
  card.dataset.songKey = getSongKey(song);
  card.style.animationDelay = `${index * 90}ms`;
  card.tabIndex = 0;

  const artwork = document.createElement("div");
  artwork.className = "song-artwork";

  const image = document.createElement("img");
  image.className = "song-image";
  image.src = song.poster;
  image.alt = `${song.title} poster`;
  image.loading = "lazy";
  image.decoding = "async";

  const playButton = document.createElement("button");
  playButton.className = "play-button";
  playButton.type = "button";
  playButton.setAttribute("aria-label", `Play ${song.title}`);
  playButton.innerHTML = `
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z"></path>
    </svg>
  `;
  playButton.addEventListener("click", (event) => {
    event.stopPropagation();
    loadSongIntoPlayer(song);
  });

  card.addEventListener("click", () => loadSongIntoPlayer(song));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      loadSongIntoPlayer(song);
    }
  });

  const meta = document.createElement("div");
  meta.className = "song-meta";
  meta.innerHTML = `
    <div class="song-chip-row">
      <span class="chip">${translations[UI_LANGUAGE].categories[mood]}</span>
      <span class="album-chip">${song.language}</span>
    </div>
    <h4>${song.title}</h4>
    <p class="artist">${song.artist}</p>
    <p class="album">${song.album}</p>
  `;

  artwork.append(image, playButton);
  card.append(artwork, meta);
  return card;
}

function renderSongs(mood) {
  const songs = getSongsForMood(mood);

  if (state.songRenderTimer) {
    window.clearTimeout(state.songRenderTimer);
  }

  els.songGrid.classList.add("is-updating");
  state.songRenderTimer = window.setTimeout(() => {
    els.songGrid.replaceChildren(...songs.map((song, index) => createSongCard(song, mood, index)));
    setActiveSongCard(state.currentSongKey);
    els.songGrid.classList.remove("is-updating");
    state.songRenderTimer = null;
  }, 160);
}

function updateMoodCopy(expression = "neutral", confidence = 0) {
  const moodCopy = translations[UI_LANGUAGE];
  els.moodLabel.textContent = state.streamStarted
    ? state.moodLocked
      ? t("moodDetectedSuccess")
      : `${t("detected")} ${expression}`
    : t("idle");
  els.moodResult.textContent = moodCopy.moodLabels[state.currentMood];
  els.moodMessage.textContent = moodCopy.moodMessages[state.currentMood];

  if (state.streamStarted) {
    els.cameraStatusBadge.textContent = state.moodLocked
      ? t("moodLocked")
      : `${Math.round(confidence * 100)}% ${expression}`;
    els.cameraOverlayText.textContent = state.moodLocked
      ? t("moodDetectedSuccess")
      : `${moodCopy.moods[state.currentMood]} - ${languages[state.currentLanguage].label}`;
  }
}

function applyMood(mood, expression = "neutral", confidence = 0, expressionData = null) {
  if (mood !== state.currentMood) {
    state.currentMood = mood;
    document.body.setAttribute("data-mood", mood);
    renderSongs(mood);
  }

  if (expressionData) {
    state.latestExpressionData = expressionData;
  }

  updateMoodCopy(expression, confidence);
  updateMoodExplanation(state.latestExpressionData);
  updatePlayerBadges();
}

function showError(message) {
  els.moodLabel.textContent = t("actionNeeded");
  els.moodResult.textContent = t("detectionUnavailable");
  els.moodMessage.textContent = message;
  els.backendStatus.textContent = t("setupAttention");
  els.cameraOverlayText.textContent = t("fixIssue");
  els.cameraHint.textContent = t("idleHint");
}

function initializeApp() {
  state.currentLanguage = getStoredLanguage();
  els.languageSelect.value = state.currentLanguage;

  els.cameraToggleBtn.addEventListener("click", async () => {
    if (state.streamStarted) {
      stopWebcam();
      return;
    }

    const started = await startWebcam();
    if (started) {
      analyzeMoodOnce();
    }
  });

  els.detectMoodBtn.addEventListener("click", analyzeMoodOnce);
  els.languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
  els.languageOptions.forEach((option) => {
    option.addEventListener("click", () => applyLanguage(option.dataset.languageOption));
  });
  els.playerPlayPauseBtn.addEventListener("click", togglePlayerPlayback);

  document.body.setAttribute("data-mood", state.currentMood);
  updateCameraVisualState(false);
  updateDetectionButtonState();
  els.backendStatus.textContent = t("browserReady");
  els.cameraHint.textContent = t("idleHint");
  applyLanguage(state.currentLanguage);
}

initializeApp();
