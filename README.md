# 🐠 Fishify Yourself
> Discover your marine alter ego.

Fishify Yourself is an interactive personality quiz that matches users with a marine creature based on their answers.
Inspired by personality quizzes like 16Personalities and fun interactive experiences, the project combines playful UX with a modern ocean-inspired design.

## Current Progress

**V1 — In Development**

### Quiz Experience

- ✅ React + Vite setup  
- ✅ Multi-page navigation  
- ✅ Ocean-themed landing page  
- ✅ Interactive personality quiz  
- ✅ 20 personality-based questions  
- ✅ Question progress tracking  
- ✅ Answer-based scoring system  
- ✅ Dynamic result calculation  
- ✅ Match percentage system  

### Marine Personalities

- ✅ 20 marine personality types  
- ✅ Personality traits  
- ✅ Custom personality descriptions  
- ✅ "Why You Got This" explanations  
- ✅ Ocean facts  
- ✅ Personalized ocean names  
- ✅ Personality compatibility  
- ✅ "Almost Was" secondary results  

### Result Experience

- ✅ Loading/reveal sequence  
- ✅ Animated animal reveal  
- ✅ Dramatic result animations  
- ✅ Animal-specific glowing card borders  
- 🚧 Animal-specific result worlds  
- 🚧 Replace emojis with custom animal artwork  
- 🚧 More dramatic Spotify Wrapped-style result sequence  

### Ocean Visuals

- ✅ Animated bubbles  
- ✅ Floating underwater particles  
- ✅ Ocean light rays  
- ✅ Glassmorphism UI  
- ✅ Ocean-inspired gradients  
- ✅ CSS animations  
- ✅ Framer Motion animations  


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
Marine Personality
      ↓
Animated Ocean Reveal
      ↓
Personalized Ocean Identity
```
Users answer a series of personality questions. Each answer contributes points toward different marine personalities.
The highest-scoring personality becomes the user's marine alter ego.
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

## The Result Experience
The result is designed to feel more like an experience than a simple quiz result.
### The Reveal
```text
Your ocean identity is...

        3
        2
        1

        🌊

      OCTOPUS

      82% MATCH
```
The animal then emerges from the water before the rest of the personality profile unfolds.
The result experience progressively reveals:
```text 
Animal
   ↓
Match Percentage
   ↓
Personality Title
   ↓
Traits
   ↓
Ocean Name
   ↓
Why You Got This
   ↓
Ocean Fact
   ↓
Almost Was
   ↓
Compatibility
```
The goal is to create a Spotify Wrapped-style reveal experience, but underwater.
### Animal-Specific Result Worlds
Each marine personality can eventually have subtle environmental differences while keeping the core ocean background consistent.
The goal is not to completely change the page for every animal.
Instead, small environmental details respond to the result.
#### 🐙 Octopus
- Purple/blue accents
- Ink-inspired animations
- Drifting tentacle silhouettes
#### 🐋 Whale
- Slow floating particles
- Deeper ocean atmosphere
- Gentle whale-song-inspired visual pulses
#### 🪼 Jellyfish
- Bioluminescent particles
- Floating movement
- Soft glowing pulses
#### 🦈 Shark
- Sharper motion
- Darker atmosphere
- Subtle silhouettes passing behind the card
#### 🪸 Coral
- Reef particles
- Tiny fish
- Soft colorful movement

More animal-specific environments will be added as development continues.

## Tech Stack
### Frontend:
- React
- Vite
- JavaScript
- React Router
- Framer Motion
### Styling:
- CSS
- CSS animations
- Glassmorphism
- Responsive layouts
- Ocean-inspired gradients and effects
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
Future Roadmap — V2
Fishify V2 will focus on making the personality system more sophisticated and expanding the experience beyond the original quiz.
### Face-to-Animal Mode
- An experimental mode that analyzes a user's face and matches them with a marine animal.
- Potentially exploring:
- - Computer vision
- - Face detection
- - Image processing
- - ML-based classification
### Personality Quiz 2.0
- A deeper personality model rather than simple animal-specific scoring.
- Potential personality dimensions could include:
- - Curiosity
- - Creativity
- - Social energy
- - Adaptability
- - Courage
- - Independence
These dimensions could be used to create more nuanced marine personalities.
### Smarter "Why You Got This"
Instead of using a mostly fixed explanation, Fishify could analyze the user's individual answers and generate a more personalized explanation of their result.
### Ocean Personality Compatibility Chart
Expand the current compatibility system into a visual personality compatibility model showing how different marine personalities interact.
### Ocean Soundscapes
- Optional ambient underwater audio based on the user's result world.
- Examples:
- - Deep-sea ambience
- - Reef sounds
- - Open-ocean ambience
- - Coastal water
- Sound would be optional and muted by default.

## Project Goals
Fishify Yourself is being built as a frontend-focused project exploring:
- Interactive user experiences
- Personality-based scoring systems
- React component architecture
- Animation and motion design
- Responsive UI
- Data-driven interfaces
- Creative visual design
## Project Status
V1 — Active Development

The goal of V1 is to create a polished, fun, visually engaging personality quiz before expanding Fishify into more advanced features.

Built with 🌊, curiosity, and an unreasonable number of marine animals.
