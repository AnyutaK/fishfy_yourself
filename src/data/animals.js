import seahorseImage from "../assets/seahorse.png";
import whaleImage from "../assets/whale.png";
import nautilusImage from "../assets/nautilus.png";
import starfishImage from "../assets/starfish.png";
import dolphinImage from "../assets/dolphin.png";
import angelfishImage from "../assets/angelfish.png";
import seaTurtleImage from "../assets/sea-turtle.png";
import octopusImage from "../assets/octopus.png";
import squidImage from "../assets/squid.png";
import lobsterImage from "../assets/lobster.png";
import sharkImage from "../assets/shark.png";
import manateeImage from "../assets/manatee.png";
import orcaImage from "../assets/orca.png";
import clownfishImage from "../assets/clownfish.png";
import mantaRayImage from "../assets/manta_ray.png";
import penguinImage from "../assets/penguin.png";
import jellyfishImage from "../assets/jellyfish.png";
import crabImage from "../assets/crab.png";
import coralImage from "../assets/corals.png";
import seaOtterImage from "../assets/sea-otter.png";

export const animals = {
  octopus: {
    id: "octopus",
    name: "Octopus",
    title: "The Curious Creator",
    emoji: "🐙",
    image: octopusImage,
    traits: [
      "Creative",
      "Curious",
      "Adaptable"
    ],
    description:
      "You see possibilities everywhere. You love exploring ideas, solving problems, and finding creative ways around challenges.",
    whyYouGotThis:
  "Your curiosity and creativity help you see solutions others might miss.",
    funFact:
      "Octopuses have three hearts and are known for their incredible problem-solving abilities.",
  compatibility: {
  friends: [
    "squid",
    "nautilus",
    "manta"
  ],
  opposite: "shark"
}
    },

  dolphin: {
    id: "dolphin",
    name: "Dolphin",
    title: "The Ocean Spark",
    emoji: "🐬",
    image: dolphinImage,
    traits: [
      "Playful",
      "Social",
      "Energetic"
    ],
    description:
      "You bring energy wherever you go. You thrive through friendships, curiosity, and shared experiences.",
    whyYouGotThis:
  "Your energy comes from connection and curiosity. You bring people together, find joy in shared experiences, and make every environment brighter.",
      funFact:
      "Dolphins communicate using unique sounds and whistles.",
  compatibility: {
  friends: [
    "otter",
    "penguin",
    "clownfish"
  ],
  opposite: "jellyfish"
} 
    },

  whale: {
    id: "whale",
    name: "Whale",
    title: "The Deep Thinker",
    emoji: "🐋",
    image: whaleImage,  
    traits: [
      "Wise",
      "Calm",
      "Thoughtful"
    ],
    description:
      "You enjoy meaningful moments and often see things from a deeper perspective.",
    whyYouGotThis:
  "You have a thoughtful and calm nature. You take time to understand the world around you and often see deeper meanings others miss.",
    funFact:
      "Some whales travel thousands of kilometers across oceans.",
  compatibility: {
  friends: [
    "turtle",
    "manatee",
    "nautilus"
  ],
  opposite: "shark"
}
  },

  turtle: {
    id: "turtle",
    name: "Sea Turtle",
    title: "The Gentle Voyager",
    emoji: "🐢",
    image: seaTurtleImage,  
    traits: [
      "Patient",
      "Peaceful",
      "Resilient"
    ],
    description:
      "You believe in steady progress and trust your own journey.",
    whyYouGotThis:
  "You believe in steady progress and trust your own path. Your patience and resilience help you overcome challenges without rushing.",
    funFact:
      "Sea turtles can navigate across enormous ocean distances.",
      compatibility: {
  friends: [
    "manatee",
    "whale",
    "starfish"
  ],
  opposite: "dolphin"
}
  },

  shark: {
    id: "shark",
    name: "Shark",
    title: "The Ocean Challenger",
    emoji: "🦈",
    image: sharkImage,  
    traits: [
      "Fearless",
      "Driven",
      "Focused"
    ],
    description:
      "You chase goals with confidence and aren't afraid of challenges.",
      whyYouGotThis:
  "You are driven by ambition and determination. When you set your mind on something, you pursue it with focus and confidence.",
    funFact:
      "Sharks have existed for hundreds of millions of years.",
      compatibility: {
  friends: [
    "orca",
    "lobster",
    "squid"
  ],
  opposite: "manatee"
}
  },

  orca: {
    id: "orca",
    name: "Orca",
    title: "The Ocean Leader",
    emoji: "🐳",
    image: orcaImage,
    traits: [
      "Confident",
      "Protective",
      "Social"
    ],
    description:
      "You naturally guide others and value strong connections.",
      whyYouGotThis:
  "You naturally protect and inspire others. Your confidence comes from strong connections and your ability to support those around you.",
    funFact:
      "Orcas live in close family groups called pods.",
      compatibility: {
  friends: [
    "dolphin",
    "penguin",
    "whale"
  ],
  opposite: "jellyfish"
}
  },

  manta: {
    id: "manta",
    name: "Manta Ray",
    title: "The Free Spirit",
    emoji: "🪽",
    image: mantaRayImage,
    traits: [
      "Graceful",
      "Observant",
      "Adventurous"
    ],
    description:
      "You value freedom, beauty, and discovering the world around you.",
      whyYouGotThis:
  "You value freedom and exploration. You are always looking for new perspectives and experiences that help you grow.",
    funFact:
      "Manta rays are known for their impressive intelligence.",
    compatibility: {
  friends: [
    "jellyfish",
    "turtle",
    "octopus"
  ],
  opposite: "lobster"
}
  },

  jellyfish: {
    id: "jellyfish",
    name: "Jellyfish",
    title: "The Dreamy Drifter",
    emoji: "🪼",
    image: jellyfishImage,
    traits: [
      "Mysterious",
      "Independent",
      "Flexible"
    ],
    description:
      "You move through life with your own rhythm and adapt beautifully.",
    whyYouGotThis:
  "You move through life with flexibility and intuition. You adapt to changes while staying true to your own unique rhythm.",
      funFact:
      "Jellyfish have existed for hundreds of millions of years.",
      compatibility: {
  friends: [
    "manta",
    "starfish",
    "nautilus"
  ],
  opposite: "orca"
}
  },
    seahorse: {
    id: "seahorse",
    name: "Seahorse",
    title: "The Tiny Dreamer",
    emoji: "🐴",
    image: seahorseImage,
    traits: [
      "Gentle",
      "Creative",
      "Caring"
    ],
    description:
      "You notice the little things in life and bring kindness wherever you go.",
    whyYouGotThis:
  "You notice small details and care deeply about the world around you. Your creativity and kindness make you special.",
  funFact:
      "Seahorses are one of the few animals where males carry the babies.",
    compatibility: {
  friends: [
    "angelfish",
    "clownfish",
    "coral"
  ],
  opposite: "shark"
}
  },

  clownfish: {
    id: "clownfish",
    name: "Clownfish",
    title: "The Reef Friend",
    emoji: "🐠",
    image: clownfishImage,
    traits: [
      "Optimistic",
      "Loyal",
      "Friendly"
    ],
    description:
      "You brighten every room and make people feel comfortable around you.",
    whyYouGotThis:
  "You create happiness wherever you go. Your optimism and loyalty make people feel comfortable and valued around you.",
  funFact:
      "Clownfish can change their social role within their group.",
      compatibility: {
  friends: [
    "dolphin",
    "otter",
    "coral"
  ],
  opposite: "jellyfish"
}
  },

  penguin: {
    id: "penguin",
    name: "Penguin",
    title: "The Loyal Heart",
    emoji: "🐧",
    image: penguinImage,
    traits: [
      "Reliable",
      "Caring",
      "Connected"
    ],
    description:
      "You value meaningful relationships and always show up for the people you care about.",
    whyYouGotThis:
  "You value meaningful relationships and always show up for the people you care about. Your loyalty is one of your greatest strengths.",
  funFact:
      "Penguins often form strong social bonds.",
    compatibility: {
  friends: [
    "dolphin",
    "orca",
    "otter"
  ],
  opposite: "squid"
}  
  },

  otter: {
    id: "otter",
    name: "Sea Otter",
    title: "The Joy Keeper",
    emoji: "🦦",
    image: seaOtterImage,
    traits: [
      "Playful",
      "Warm",
      "Creative"
    ],
    description:
      "You find happiness in simple moments and spread positivity around you.",
    whyYouGotThis:
  "You find magic in simple moments. Your playful creativity and warmth help others feel happier and more relaxed.",
  funFact:
      "Sea otters sometimes hold hands while resting so they don't drift apart.",
  compatibility: {
  friends: [
    "dolphin",
    "clownfish",
    "penguin"
  ],
  opposite: "shark"
}
  },

  squid: {
    id: "squid",
    name: "Squid",
    title: "The Strategic Mind",
    emoji: "🦑",
    image: squidImage,
    traits: [
      "Intelligent",
      "Strategic",
      "Inventive"
    ],
    description:
      "You analyze situations deeply and enjoy solving complex challenges.",
    whyYouGotThis:
  "You are a strategic thinker who enjoys solving complex problems. Your intelligence helps you find unique solutions.",
  funFact:
      "Squids can change color and patterns to communicate.",
    compatibility: {
  friends: [
    "octopus",
    "nautilus",
    "jellyfish"
  ],
  opposite: "penguin"
}  
  },

  crab: {
    id: "crab",
    name: "Crab",
    title: "The Reef Guardian",
    emoji: "🦀",
    image: crabImage,
    traits: [
      "Protective",
      "Resourceful",
      "Careful"
    ],
    description:
      "You protect what matters to you and always find creative solutions.",
    whyYouGotThis:
  "You protect what matters to you and approach challenges carefully. Your resourcefulness helps you handle unexpected situations.",
  funFact:
      "Crabs have adapted to many different ocean environments.",
    compatibility: {
  friends: [
    "lobster",
    "turtle",
    "manatee"
  ],
  opposite: "manta"
}
  },

  starfish: {
    id: "starfish",
    name: "Starfish",
    title: "The Balanced Soul",
    emoji: "⭐",
    image: starfishImage,
    traits: [
      "Patient",
      "Balanced",
      "Adaptable"
    ],
    description:
      "You bring calm energy and know how to find balance in changing situations.",
    whyYouGotThis:
  "You bring balance and calm wherever you go. Your ability to adapt helps you recover and grow through change.",
  funFact:
      "Many starfish can regrow lost arms.",
  compatibility: {
  friends: [
    "jellyfish",
    "turtle",
    "manatee"
  ],
  opposite: "orca"
}
  },

  nautilus: {
    id: "nautilus",
    name: "Nautilus",
    title: "The Ancient Dreamer",
    emoji: "🐚",
    image: nautilusImage,
    traits: [
      "Thoughtful",
      "Curious",
      "Reflective"
    ],
    description:
      "You enjoy exploring ideas and seeing the hidden patterns in life.",
    whyYouGotThis:
  "You are naturally reflective and curious. You enjoy discovering hidden patterns and understanding the world around you.",
  funFact:
      "Nautilus shells grow in a natural spiral pattern.",
  compatibility: {
  friends: [
    "octopus",
    "whale",
    "squid"
  ],
  opposite: "dolphin"
}
  },

  lobster: {
    id: "lobster",
    name: "Lobster",
    title: "The Ocean Shield",
    emoji: "🦞",
    image: lobsterImage,
    traits: [
      "Strong",
      "Dependable",
      "Resilient"
    ],
    description:
      "You stand strong through challenges and protect the people you value.",
    whyYouGotThis:
  "You have quiet strength and resilience. You stand firm through challenges and protect the things that matter most.",
  funFact:
      "Lobsters have a hard outer shell that protects them.",
    compatibility: {
  friends: [
    "crab",
    "shark",
    "turtle"
  ],
  opposite: "jellyfish"
}
  },

  angelfish: {
    id: "angelfish",
    name: "Angelfish",
    title: "The Ocean Artist",
    emoji: "🐟",
    image: angelfishImage,
    traits: [
      "Elegant",
      "Creative",
      "Expressive"
    ],
    description:
      "You express yourself through beauty, imagination, and creativity.",
    whyYouGotThis:
  "You express yourself through creativity and beauty. Your imagination and individuality help you stand out.",
  funFact:
      "Angelfish are known for their striking shapes and patterns.",
  compatibility: {
  friends: [
    "seahorse",
    "coral",
    "clownfish"
  ],
  opposite: "shark"
}
  },

  manatee: {
    id: "manatee",
    name: "Manatee",
    title: "The Gentle Giant",
    emoji: "🫧",
    image: manateeImage,
    traits: [
      "Kind",
      "Peaceful",
      "Compassionate"
    ],
    description:
      "You bring a calming presence and make others feel safe.",
    whyYouGotThis:
  "You bring a peaceful and caring energy. People feel safe around you because of your kindness and compassion.",
  funFact:
      "Manatees are sometimes called sea cows.",
  compatibility: {
  friends: [
    "whale",
    "turtle",
    "coral"
  ],
  opposite: "shark"
}
  },

  coral: {
    id: "coral",
    name: "Coral",
    title: "The Heart of the Reef",
    emoji: "🪸",
    image: coralImage,
    traits: [
      "Supportive",
      "Nurturing",
      "Connected"
    ],
    description:
      "You create spaces where others can grow and feel welcome.",
    whyYouGotThis:
  "You create connections and support the people around you. Your strength comes from helping others grow and thrive.",
  funFact:
      "Coral reefs support thousands of marine species.",
    compatibility: {
  friends: [
    "clownfish",
    "angelfish",
    "manatee"
  ],
  opposite: "jellyfish"
}
  }
};