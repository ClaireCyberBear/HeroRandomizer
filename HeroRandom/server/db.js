const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database(
  "./herodata.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the herodata database.");
  }
);

module.exports = db;

db.run(
  `CREATE TABLE IF NOT EXISTS heroes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    ultimate TEXT,
    abilityOne TEXT,
    abilityTwo TEXT,
    secondaryFire TEXT,
)`,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Successful creation of the "heroes" table');
  }
);

const heroes = [
  {
    id: "1",
    name: "Reinhardt",
    role: "tank",
    ultimate: "Earthshatter",
    abilityOne: "Charge",
    abilityTwo: "Fire Strike",
    secondaryFire: "Barrier Field",
  },
  {
    id: "2",
    name: "D.VA",
    role: "tank",
    ultimate: "Self-Destruct",
    abilityOne: "Boosters",
    abilityTwo: "Micro Missiles",
    secondaryFire: "Defense Matrix",
  },
  {
    id: "3",
    name: "Doomfist",
    role: "tank",
    ultimate: "Meteor Strike",
    abilityOne: "Seismic Slam",
    abilityTwo: "Power Block",
    secondaryFire: "Rocket Punch",
  },
  {
    id: "4",
    name: "Junker Queen",
    role: "tank",
    ultimate: "Rampage",
    abilityOne: "Commanding Shout",
    abilityTwo: "Carnage",
    secondaryFire: "Jagged Blade",
  },
  {
    id: "5",
    name: "Orisa",
    role: "tank",
    ultimate: "Terra Surge",
    abilityOne: "Fortify",
    abilityTwo: "Javelin Throw",
    secondaryFire: "Javelin Spin",
  },
  {
    id: "6",
    name: "Ramattra",
    role: "tank",
    ultimate: "Annihilation",
    abilityOne: "Nemesis Form",
    abilityTwo: "Ravenous Vortex",
    secondaryFire: "Block",
  },
  {
    id: "7",
    name: "Roadhog",
    role: "tank",
    ultimate: "Whole Hog",
    abilityOne: "Chain Hook",
    abilityTwo: "Take a Breather",
    secondaryFire: "Choked Shotgun",
  },
  {
    id: "8",
    name: "Sigma",
    role: "tank",
    ultimate: "Gravitic Flux",
    abilityOne: "Kinetic Grasp",
    abilityTwo: "Accretion",
    secondaryFire: "Shield",
  },
  {
    id: "9",
    name: "Winston",
    role: "tank",
    ultimate: "",
    abilityOne: "",
    abilityTwo: "",
    secondaryFire: "",
  },
  {
    id: "10",
    name: "Wrecking Ball",
    role: "tank",
    ultimate: "",
    abilityOne: "",
    abilityTwo: "",
    secondaryFire: "",
  },
  {
    id: "11",
    name: "Zarya",
    role: "tank",
    ultimate: "Graviton Surge",
    abilityOne: "Self Bubble",
    abilityTwo: "Team Bubble",
    secondaryFire: "Explosive Alt-fire",
  },
  {
    id: "12",
    name: "Ashe",
    role: "damage",
    ultimate: "B.O.B.",
    abilityOne: "Coach Gun",
    abilityTwo: "Dynanite",
    secondaryFire: "Scope",
  },
  {
    id: "13",
    name: "Bastion",
    role: "damage",
    ultimate: "Artillery",
    abilityOne: "Assault",
    abilityTwo: "A-36 Tactical Grenade",
    secondaryFire: "A-36 Tactical Grenade",
  },
  {
    id: "14",
    name: "Cassidy",
    role: "damage",
    ultimate: "Dead-Eye",
    abilityOne: "Combat Roll",
    abilityTwo: "Magnetic Grenade",
    secondaryFire: "Fan the Hammer",
  },
  {
    id: "15",
    name: "Echo",
    role: "damage",
    ultimate: "Duplicate",
    abilityOne: "Flight",
    abilityTwo: "Sticky Bombs",
    secondaryFire: "Focusing Beam",
  },
  {
    id: "16",
    name: "",
    role: "",
    ultimate: "",
    abilityOne: "",
    abilityTwo: "",
    secondaryFire: "",
  },
  {
    id: "",
    name: "",
    role: "",
    ultimate: "",
    abilityOne: "",
    abilityTwo: "",
    secondaryFire: "",
  },
];
