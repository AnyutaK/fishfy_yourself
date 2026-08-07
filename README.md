# 🐠 Fishify Yourself
> Discover your marine alter ego.

Fishify Yourself is an interactive personality quiz that matches users with a marine creature based on their answers.
Inspired by personality quizzes like 16Personalities and fun interactive experiences, the project combines playful UX with a modern ocean-inspired design.

## 🌊 Current Progress

**Development in progress**

Current features:

✅ React + Vite setup
✅ Multi-page navigation with React Router
✅ Ocean-themed landing page
✅ Animated landing page entrance
✅ Animated fish on landing page
✅ Interactive personality quiz
✅ 20 personality-based questions
✅ Question progress tracking
✅ Answer-based scoring system
✅ 20 marine personality results
✅ Dynamic result calculation
✅ Match percentage system
✅ "Almost Was" secondary results
✅ "Why you got this" personality explanation
✅ Personalized ocean name generator
✅ Personality compatibility system
✅ Opposite personality system
✅ Animated ocean bubbles
✅ Floating underwater particles
✅ Ocean light rays
✅ Framer Motion animations
✅ Animated loading screen
✅ Animated result reveal
✅ Countdown result sequence
✅ Animated ripples during result reveal
✅ Reveal bubbles
✅ Animal glow effects
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
Users answer a series of personality questions. Each answer contributes points toward different marine personalities.
The highest-scoring animal becomes the user's marine alter ego.
Each result includes:
- Personality traits
- Custom personality description
- Explanation of why the result was chosen
- Ocean fact
- Personalized ocean name
- Compatible personalities
- Opposite personality
- Secondary "Almost Was" results
- Match percentage

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

### Result Experience
The result reveal is designed as a small animated experience rather than simply displaying the final score.
The current reveal includes:
- Loading transition
- Countdown sequence
- Expanding ocean ripples
- Floating reveal bubbles
- Soft animal glow
- Animated animal entrance
- Match percentage reveal
- Personalized ocean identity
The result card then reveals the full personality profile.
  


## Tech Stack
### Frontend:
React
Vite
JavaScript
React Router
Framer Motion
### Styling:
CSS
CSS animations
Glassmorphism
Responsive layouts
Ocean-inspired gradients and effects
##  Project Structure
```text
src/
│
├── components/
│   ├── BubbleBackground.jsx
│   ├── LoadingScreen.jsx
│   ├── OceanEffects.jsx
│   ├── ProgressBar.jsx
│   ├── QuestionCard.jsx
│   └── ResultCard.jsx
│
├── data/
│   ├── animals.js
│   └── questions.js
│
├── pages/
│   ├── Home.jsx
│   ├── Quiz.jsx
│   └── Result.jsx
│
├── utils/
│   ├── calculateResult.js
│   └── oceanNameGenerator.js
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
### Visual Upgrade
- Replace emoji-based animals with custom marine animal artwork
- Animated animal illustrations
- Refine animal reveal presentation around the artwork
### Ocean Visuals
- Personality-specific visual details
- Additional underwater environmental effects
- Further polish to bubbles, particles, and light rays
### UI Polish
- Further responsive/mobile refinements
- Additional micro-interactions
- Accessibility improvements
- Final visual cleanup
## Project Status
Currently in active development.
Fishify Yourself is being built as a frontend-focused project exploring:
- Interactive web experiences
- Personality-based scoring systems
- React component architecture
- Animation and motion design
- Responsive UI
- Glassmorphism
- Thematic visual design
The project is currently focused on polishing the experience and upgrading the result visuals with custom marine artwork.
Made with 🌊, 🐠, and curiosity.
