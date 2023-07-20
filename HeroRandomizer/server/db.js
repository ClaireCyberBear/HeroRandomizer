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
    secondaryFire TEXT
)`,

  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Successful creation of the "heroes" table');
    /*
    const heroes = [
      {
        id: "1",
        name: "Reinhardt",
        role: "Tank",
        ultimate: "Earthshatter",
        abilityOne: "Charge",
        abilityTwo: "Fire Strike",
        secondaryFire: "Barrier Field",
      },
      {
        id: "2",
        name: "D.VA",
        role: "Tank",
        ultimate: "Self-Destruct",
        abilityOne: "Boosters",
        abilityTwo: "Micro Missiles",
        secondaryFire: "Defense Matrix",
      },
      {
        id: "3",
        name: "Doomfist",
        role: "Tank",
        ultimate: "Meteor Strike",
        abilityOne: "Seismic Slam",
        abilityTwo: "Power Block",
        secondaryFire: "Rocket Punch",
      },
      {
        id: "4",
        name: "Junker Queen",
        role: "Tank",
        ultimate: "Rampage",
        abilityOne: "Commanding Shout",
        abilityTwo: "Carnage",
        secondaryFire: "Jagged Blade",
      },
      {
        id: "5",
        name: "Orisa",
        role: "Tank",
        ultimate: "Terra Surge",
        abilityOne: "Fortify",
        abilityTwo: "Javelin Throw",
        secondaryFire: "Javelin Spin",
      },
      {
        id: "6",
        name: "Ramattra",
        role: "Tank",
        ultimate: "Annihilation",
        abilityOne: "Nemesis Form",
        abilityTwo: "Ravenous Vortex",
        secondaryFire: "Block",
      },
      {
        id: "7",
        name: "Roadhog",
        role: "Tank",
        ultimate: "Whole Hog",
        abilityOne: "Chain Hook",
        abilityTwo: "Take a Breather",
        secondaryFire: "Scrap Gun alt",
      },
      {
        id: "8",
        name: "Sigma",
        role: "Tank",
        ultimate: "Gravitic Flux",
        abilityOne: "Kinetic Grasp",
        abilityTwo: "Accretion",
        secondaryFire: "Shield",
      },
      {
        id: "9",
        name: "Winston",
        role: "Tank",
        ultimate: "Primal Rage",
        abilityOne: "Jump Pack",
        abilityTwo: "Barrier Projector",
        secondaryFire: "Tesla Cannon alt",
      },
      {
        id: "10",
        name: "Wrecking Ball",
        role: "Tank",
        ultimate: "Mine Field",
        abilityOne: "Piledriver",
        abilityTwo: "Adaptive Shield",
        secondaryFire: "Grapple Claw",
      },
      {
        id: "11",
        name: "Zarya",
        role: "Tank",
        ultimate: "Graviton Surge",
        abilityOne: "Self Bubble",
        abilityTwo: "Team Bubble",
        secondaryFire: "Explosive Alt-fire",
      },
      {
        id: "12",
        name: "Ashe",
        role: "Damage",
        ultimate: "B.O.B.",
        abilityOne: "Coach Gun",
        abilityTwo: "Dynanite",
        secondaryFire: "Scope",
      },
      {
        id: "13",
        name: "Bastion",
        role: "Damage",
        ultimate: "Artillery",
        abilityOne: "Assault",
        abilityTwo: "A-36 Tactical Grenade",
        secondaryFire: "A-36 Tactical Grenade",
      },
      {
        id: "14",
        name: "Cassidy",
        role: "Damage",
        ultimate: "Dead-Eye",
        abilityOne: "Combat Roll",
        abilityTwo: "Magnetic Grenade",
        secondaryFire: "Fan the Hammer",
      },
      {
        id: "15",
        name: "Echo",
        role: "Damage",
        ultimate: "Duplicate",
        abilityOne: "Flight",
        abilityTwo: "Sticky Bombs",
        secondaryFire: "Focusing Beam",
      },
      {
        id: "16",
        name: "Genji",
        role: "Damage",
        ultimate: "Dragonblade",
        abilityOne: "Swift Strike",
        abilityTwo: "Deflect",
        secondaryFire: "Shuriken alt",
      },
      {
        id: "17",
        name: "Hanzo",
        role: "Damage",
        ultimate: "Dragonstrike",
        abilityOne: "Storm Arrows",
        abilityTwo: "Sonic Arrow",
        secondaryFire: "Lunge",
      },
      {
        id: "18",
        name: "Junkrat",
        role: "Damage",
        ultimate: "Rip-Tire",
        abilityOne: "Concussion Mine",
        abilityTwo: "Steel Trap",
        secondaryFire: "Concussion Mine",
      },
      {
        id: "19",
        name: "Mei",
        role: "Damage",
        ultimate: "Blizzard",
        abilityOne: "Cryo-Freeze",
        abilityTwo: "Ice Wall",
        secondaryFire: "Icicle",
      },
      {
        id: "20",
        name: "Pharah",
        role: "Damage",
        ultimate: "Barrage",
        abilityOne: "Jump Jet",
        abilityTwo: "Concusssive Blast",
        secondaryFire: "Concusssive Blast",
      },
      {
        id: "21",
        name: "Reaper",
        role: "Damage",
        ultimate: "Death Blossom",
        abilityOne: "Wraith Form",
        abilityTwo: "Shadow Step",
        secondaryFire: "Shadow Step",
      },
      {
        id: "22",
        name: "Soujorn",
        role: "Damage",
        ultimate: "Railgun",
        abilityOne: "Power Slide",
        abilityTwo: "Disruptor Shot",
        secondaryFire: "Railgun alt",
      },
      {
        id: "23",
        name: "Soldier 76",
        role: "Damage",
        ultimate: "Tactical Visor",
        abilityOne: "Sprint",
        abilityTwo: "Biotic Field",
        secondaryFire: "Helix Rockets",
      },
      {
        id: "24",
        name: "Sombra",
        role: "Damage",
        ultimate: "EMP",
        abilityOne: "Stealth",
        abilityTwo: "Translocator",
        secondaryFire: "Hack",
      },
      {
        id: "25",
        name: "Symmetra",
        role: "Damage",
        ultimate: "Photon Barrier",
        abilityOne: "Sentry Turret",
        abilityTwo: "Teleporter",
        secondaryFire: "Photon Projector alt",
      },
      {
        id: "26",
        name: "Torbjorn",
        role: "Damage",
        ultimate: "Molten Core",
        abilityOne: "Deploy Turret",
        abilityTwo: "Overload",
        secondaryFire: "Molten Shotgun",
      },
      {
        id: "27",
        name: "Tracer",
        role: "Damage",
        ultimate: "Pulse Bomb",
        abilityOne: "Blink",
        abilityTwo: "Recall",
        secondaryFire: "Recall",
      },
      {
        id: "28",
        name: "Widowmaker",
        role: "Damage",
        ultimate: "Wallhack",
        abilityOne: "Grapple Hook",
        abilityTwo: "Venom Mine",
        secondaryFire: "Scope",
      },
      {
        id: "29",
        name: "Ana",
        role: "Support",
        ultimate: "Nano Boost",
        abilityOne: "Sleep Dart",
        abilityTwo: "Biotic Grenade",
        secondaryFire: "Scope",
      },
      {
        id: "30",
        name: "Batiste",
        role: "Support",
        ultimate: "Amplification Matrix",
        abilityOne: "Regenerative Burst",
        abilityTwo: "Immortality Field",
        secondaryFire: "Super Jump",
      },
      {
        id: "31",
        name: "Brigitte",
        role: "Support",
        ultimate: "Rally",
        abilityOne: "Whip Shot",
        abilityTwo: "Repair Pack",
        secondaryFire: "Shield",
      },
      {
        id: "32",
        name: "Kiriko",
        role: "Support",
        ultimate: "Kitsune Rush",
        abilityOne: "Swift Step",
        abilityTwo: "Protection Suzu",
        secondaryFire: "Wall Climb",
      },
      {
        id: "33",
        name: "Lifeweaver",
        role: "Support",
        ultimate: "Tree of Life",
        abilityOne: "Petal Platform",
        abilityTwo: "Life Grip",
        secondaryFire: "Rejunvenating Dash",
      },
      {
        id: "34",
        name: "Lucio",
        role: "Support",
        ultimate: "Sound Barrier",
        abilityOne: "Crossfade",
        abilityTwo: "Soundwave",
        secondaryFire: "Amp It Up",
      },
      {
        id: "35",
        name: "Mercy",
        role: "Support",
        ultimate: "Valkyrie",
        abilityOne: "Guardian Angel",
        abilityTwo: "Resurrect",
        secondaryFire: "Damage Boost",
      },
      {
        id: "36",
        name: "Moira",
        role: "Support",
        ultimate: "Coalescence",
        abilityOne: "Fade",
        abilityTwo: "Biotic Orb",
        secondaryFire: "Succ",
      },
      {
        id: "37",
        name: "Zenyatta",
        role: "Support",
        ultimate: "Transcendence",
        abilityOne: "Orb of Harmony",
        abilityTwo: "Orb of Discord",
        secondaryFire: "Orb Volley",
      },
    ]; // define your heroes array here

    heroes.forEach((hero) => {
      db.run(
        `INSERT INTO heroes(id, name, role, ultimate, abilityOne, abilityTwo, secondaryFire) VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [
          hero.id,
          hero.name,
          hero.role,
          hero.ultimate,
          hero.abilityOne,
          hero.abilityTwo,
          hero.secondaryFire,
        ],
        function (err) {
          if (err) {
            return console.log(err.message);
          }
          console.log(`A row has been inserted with rowid ${this.lastID}`);
        }
      );
    });*/
  }
);