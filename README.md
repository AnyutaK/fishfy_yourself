# 🐠 Fishify Yourself
> Discover your marine alter ego.

Fishify Yourself is an interactive personality quiz that matches users with a marine creature based on their answers.
Inspired by personality quizzes like 16Personalities and fun interactive experiences, the project combines playful UX with a modern ocean-inspired design.

## 🌊 Current Progress

**Development in progress**

Current features:

✅ React + Vite setup  
✅ Multi-page navigation  
✅ Ocean-themed landing page  
✅ Interactive personality quiz  
✅ 20 personality-based questions  
✅ Question progress tracking  
✅ Answer-based scoring system  
✅ 20 marine personality results  
✅ Dynamic result calculation  
✅ Match percentage system  
✅ "Almost Was" secondary results  
✅ Personality explanation ("Why you got this")  
✅ Ocean name generator  
✅ Personality compatibility system  
✅ Animated ocean bubbles  
✅ Framer Motion animations  
✅ Loading screen before result reveal  
✅ Responsive glassmorphism UI  

## How It Works

```text
Landing Page
↓
Personality Quiz
↓
Answer Questions
↓
Score Calculation
↓
Marine Personality Result
↓
Personalized Ocean Identity
```
Users answer personality questions, and each response contributes points toward different marine personalities.

The highest-scoring animal becomes the user's marine alter ego, along with:
- personality traits
- description
- ocean identity
- compatibility matches
- secondary possible matches
  
## Current Marine Personalities
Currently implemented:
### Animal	Personality
| Animal        | Personality                       |
| ------------- | --------------------------------- |
| 🐙 Octopus    | Curious, Creative, Adaptable      |
| 🐬 Dolphin    | Playful, Social, Energetic        |
| 🐋 Whale      | Wise, Calm, Thoughtful            |
| 🐢 Sea Turtle | Patient, Peaceful, Resilient      |
| 🦈 Shark      | Fearless, Driven, Focused         |
| 🐳 Orca       | Confident, Protective, Social     |
| 🪽 Manta Ray  | Graceful, Observant, Adventurous  |
| 🪼 Jellyfish  | Mysterious, Independent, Flexible |
| 🐴 Seahorse   | Gentle, Creative, Caring          |
| 🐠 Clownfish  | Optimistic, Loyal, Friendly       |
| 🐧 Penguin    | Reliable, Caring, Connected       |
| 🦦 Sea Otter  | Playful, Warm, Creative           |
| 🦑 Squid      | Intelligent, Strategic, Inventive |
| 🦀 Crab       | Protective, Resourceful, Careful  |
| ⭐ Starfish    | Patient, Balanced, Adaptable      |
| 🐚 Nautilus   | Thoughtful, Curious, Reflective   |
| 🦞 Lobster    | Strong, Dependable, Resilient     |
| 🐟 Angelfish  | Elegant, Creative, Expressive     |
| 🫧 Manatee    | Kind, Peaceful, Compassionate     |
| 🪸 Coral      | Supportive, Nurturing, Connected  |

### Result Features

Each personality result includes:

🌊 Marine identity  
✨ Match percentage  
🧬 Personality traits  
📖 Custom description  
💭 "Why you got this" explanation  
🌊 Ocean fact  
🔮 Personalized ocean name  
🤝 Compatible marine personalities  
🐠 "Almost Was" secondary matches  


## Tech Stack
### Frontend:
React
Vite
JavaScript
React Router
Framer Motion
### Styling:
CSS
Custom ocean-inspired UI
Glassmorphism design
CSS animations
##  Project Structure
```text
src/
│
├── components/
│ ├── BubbleBackground.jsx
│ ├── LoadingScreen.jsx
│ ├── ProgressBar.jsx
│ ├── QuestionCard.jsx
│ └── ResultCard.jsx
│
├── data/
│ ├── animals.js
│ └── questions.js
│
├── pages/
│ ├── Home.jsx
│ ├── Quiz.jsx
│ └── Result.jsx
│
├── utils/
│ ├── calculateResult.js
│ └── oceanNameGenerator.js
│
├── App.jsx
└── main.jsx
```
## Running Locally
Clone the repository:
```bash
git clone https://github.com/AnyutaK/fishify_yourself.git
```
Navigate into the project:
```bash
cd fishify-yourself
```
Install dependencies:
``` bash
npm install
```
Start development server:
```bash
npm run dev
```
Open:
```text
http://localhost:5173
```
## Future Roadmap
### Result Experience
- Spotify Wrapped style result reveal
- Animated animal reveal
- Dramatic countdown sequence
- Bubble/confetti effects
### Ocean Visuals
- Deeper ocean gradients
- Animated underwater particles
- Light rays
- Floating plankton effects
- Different backgrounds based on personality
### Quiz Experience
- Question transitions
- Answer button animations
- Improved progress animations
### Visual Upgrade
- Replace emojis with custom animal artwork
- Animated animal illustrations
### Additional Features
- Shareable result cards
- AI-generated personality descriptions
- Friend comparison mode
## Project Status
Currently in active development.
Built as a frontend-focused project exploring:
- interactive experiences
- personality quizzes
- animations
- modern React architecture
- marine-themed design
Made with 🌊 and curiosity.
