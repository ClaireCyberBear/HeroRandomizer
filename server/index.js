const express = require("express");
const db = require("./db");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/api/heroes", (req, res) => {
  db.all(`SELECT * FROM heroes`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/api/heroes/:id", (req, res) => {
  const id = req.params.id;
  db.get(`SELECT * FROM heroes WHERE id = ?`, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

app.post(`/api/heroes`, (req, res) => {
  const hero = req.body;
  db.run(
    `INSERT INTO heroes(id, name, role, ultimate, abilityOne, abilityTwo, secondaryFire) VALUES(?, ?, ?, ?, ?, ?, ?)`,
    [
      hero.name,
      hero.role,
      hero.ultimate,
      hero.abilityOne,
      hero.abilityTwo,
      hero.secondaryFire,
    ],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

app.get("/api/random-hero", (req, res) => {
  const role = req.query.role;
  const excludeUltimate = req.query.excludeUltimate === "true";

  db.all(`SELECT * FROM heroes WHERE role = ?`, [role], (err, heroes) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    if (excludeUltimate) {
      randomHero.ultimate = "Disabled";
    }

    res.json(randomHero);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
