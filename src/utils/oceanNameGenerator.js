const oceanNames = {
  octopus: [
    "Azure Tideweaver",
    "Coral Whisperer",
    "Deep Sea Dreamer"
  ],
  dolphin: [
    "Wave Dancer",
    "Ocean Spark",
    "Blue Horizon"
  ],
  whale: [
    "Moonlit Voyager",
    "Deep Ocean Sage",
    "Silent Current"
  ],
  turtle: [
    "Ancient Wavewalker",
    "Ocean Wanderer",
    "Calm Tidekeeper"
  ],
  shark: [
    "Storm Chaser",
    "Abyss Guardian",
    "Ocean Hunter"
  ],
  orca: [
    "Tide Leader",
    "Ocean Guardian",
    "Wave Commander"
  ],
  manta: [
    "Sky of the Sea",
    "Free Current",
    "Ocean Explorer"
  ],
  jellyfish: [
    "Glow Drifter",
    "Mystic Current",
    "Moonlit Floater"
  ],
  seahorse: [
    "Tiny Tidekeeper",
    "Coral Dreamer",
    "Ocean Artist"
  ],
  clownfish: [
    "Reef Spark",
    "Coral Companion",
    "Bright Current"
  ],
  penguin: [
    "Frosted Wave",
    "Ocean Heart",
    "Tide Friend"
  ],
  otter: [
    "Joyful Current",
    "Wave Wanderer",
    "Ocean Playmaker"
  ],
  squid: [
    "Shadow Navigator",
    "Deep Thinker",
    "Abyss Explorer"
  ],
  crab: [
    "Reef Protector",
    "Tide Shield",
    "Coastal Guardian"
  ],
  starfish: [
    "Golden Tide",
    "Balanced Wave",
    "Ocean Light"
  ],
  nautilus: [
    "Ancient Spiral",
    "Deep Memory",
    "Ocean Scholar"
  ],
  lobster: [
    "Iron Current",
    "Ocean Fortress",
    "Deep Guardian"
  ],
  angelfish: [
    "Coral Artist",
    "Rainbow Current",
    "Ocean Muse"
  ],
  manatee: [
    "Gentle Tide",
    "Peaceful Current",
    "Ocean Heart"
  ],
  coral: [
    "Reef Soul",
    "Living Garden",
    "Ocean Bloom"
  ]
};
export function generateOceanName(animalId) {
  const names = oceanNames[animalId];
  if (!names) {
    return "Ocean Explorer";
  }
  return names[0];
}