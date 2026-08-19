import "./AnimalWorld.css";

import octopus1 from "../assets/root_assets/octopus1.png";
import octopus2 from "../assets/root_assets/octopus2.png";
import octopus3 from "../assets/root_assets/octopus3.png";

import dolphin1 from "../assets/root_assets/dolphin1.png";
import dolphin2 from "../assets/root_assets/dolphin2.png";
import dolphin3 from "../assets/root_assets/dolphin3.png";

import whale1 from "../assets/root_assets/whale1.png";
import whale2 from "../assets/root_assets/whale2.png";

import turtle1 from "../assets/root_assets/turtle1.png";
import turtle2 from "../assets/root_assets/turtle2.png";
import turtle3 from "../assets/root_assets/turtle3.png";

import shark1 from "../assets/root_assets/shark1.png";
import shark2 from "../assets/root_assets/shark2.png";
import shark3 from "../assets/root_assets/shark3.png";

import orca1 from "../assets/root_assets/orca1.png";
import orca2 from "../assets/root_assets/orca2.png";
import orca3 from "../assets/root_assets/orca3.png";
import orca4 from "../assets/root_assets/orca4.png";

import mantaray1 from "../assets/root_assets/mantaray1.png";
import mantaray2 from "../assets/root_assets/mantaray2.png";
import mantaray3 from "../assets/root_assets/mantaray3.png";
import mantaray4 from "../assets/root_assets/mantaray4.png";

import jellyfish1 from "../assets/root_assets/jellyfish1.png";
import jellyfish2 from "../assets/root_assets/jellyfish2.png";
import jellyfish3 from "../assets/root_assets/jellyfish3.png";

import seahorse1 from "../assets/root_assets/seahorse1.png";
import seahorse2 from "../assets/root_assets/seahorse2.png";
import seahorse3 from "../assets/root_assets/seahorse3.png";

import clownfish1 from "../assets/root_assets/clownfish1.png";
import clownfish2 from "../assets/root_assets/clownfish2.png";
import clownfish3 from "../assets/root_assets/clownfish3.png";

import penguin1 from "../assets/root_assets/penguin1.png";
import penguin2 from "../assets/root_assets/penguin2.png";

import otter1 from "../assets/root_assets/otter1.png";
import otter2 from "../assets/root_assets/otter2.png";
import otter3 from "../assets/root_assets/otter3.png";

import squid1 from "../assets/root_assets/squid1.png";
import squid2 from "../assets/root_assets/squid2.png";
import squid3 from "../assets/root_assets/squid3.png";

import crab1 from "../assets/root_assets/crab1.png";
import crab2 from "../assets/root_assets/crab2.png";
import crab3 from "../assets/root_assets/crab3 copy.png";

import starfish1 from "../assets/root_assets/staqrfish1.png";
import starfish2 from "../assets/root_assets/staqrfish2.png";
import starfish3 from "../assets/root_assets/starfish3.png";

import nautilus1 from "../assets/root_assets/nautilus1.png";
import nautilus2 from "../assets/root_assets/nautilus2 copy.png";
import nautilus3 from "../assets/root_assets/nautilus3.png";

import lobster1 from "../assets/root_assets/lobster1.png";
import lobster2 from "../assets/root_assets/lobster2.png";
import lobster3 from "../assets/root_assets/lobster3.png";

import angelfish1 from "../assets/root_assets/angelfish1.png";
import angelfish2 from "../assets/root_assets/angelfish2.png";
import angelfish3 from "../assets/root_assets/angelfish3.png";

import manatee1 from "../assets/root_assets/ manatee1.png";
import manatee2 from "../assets/root_assets/manatee2.png";

import coral1 from "../assets/root_assets/coral1.png";
import coral2 from "../assets/root_assets/coral2.png";
import coral3 from "../assets/root_assets/coral3.png";
import coral4 from "../assets/root_assets/coral4.png";
import coral5 from "../assets/root_assets/coral5.png";
import coral6 from "../assets/root_assets/coral6.png";
import coral7 from "../assets/root_assets/coral7.png";
import coral8 from "../assets/root_assets/coral8.png";

function AnimalWorld({ animal }) {
  const worlds = {
  octopus: [octopus1, octopus2, octopus3],
  dolphin: [dolphin1, dolphin2, dolphin3],
  whale: [whale1, whale2],
  turtle: [turtle1, turtle2, turtle3],
  shark: [shark1, shark2, shark3],
  orca: [orca1, orca2, orca3, orca4],
  manta: [mantaray1, mantaray2, mantaray3, mantaray4],
  jellyfish: [jellyfish1, jellyfish2, jellyfish3],
  seahorse: [seahorse1, seahorse2, seahorse3],
  clownfish: [clownfish1, clownfish2, clownfish3],
  penguin: [penguin1, penguin2],
  otter: [otter1, otter2, otter3],
  squid: [squid1, squid2, squid3],
  crab: [crab1, crab2, crab3],
  starfish: [starfish1, starfish2, starfish3],
  nautilus: [nautilus1, nautilus2, nautilus3],
  lobster: [lobster1, lobster2, lobster3],
  angelfish: [angelfish1, angelfish2, angelfish3],
  manatee: [manatee1, manatee2],
  coral: [
    coral1,
    coral2,
    coral3,
    coral4,
    coral5,
    coral6,
    coral7,
    coral8,
  ],
};

  const assets = worlds[animal.id] || [];
  return (
    <div className={`animal-world world-${animal.id}`}>
      {/* Ambient atmosphere */}
      <div className="world-glow world-glow-one" />
      <div className="world-glow world-glow-two" />

      {/* Light rays */}
      <div className="world-light-ray ray-one" />
      <div className="world-light-ray ray-two" />
      <div className="world-light-ray ray-three" />

      {/* Environmental shapes */}
      <div className="world-environment world-environment-left">
        <div className="environment-shape shape-one" />
        <div className="environment-shape shape-two" />
        <div className="environment-shape shape-three" />
      </div>

      <div className="world-environment world-environment-right">
        <div className="environment-shape shape-one" />
        <div className="environment-shape shape-two" />
        <div className="environment-shape shape-three" />
      </div>
      {assets.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          className={`world-asset world-asset-${index + 1}`}
          alt=""
        />
      ))}
    </div>
  );
}

export default AnimalWorld;
