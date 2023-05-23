using HeroRandomizer.Models;

public static class GameData
{
    public static List<Game> Games = new List<Game>
    {
        new Game
        {
            Name = "Overwatch",
            Roles = new List<Role>
            {
                new Role
                {
                    Name = "Tank",
                    Heroes = new List<Hero>
                    {
                        new Hero
                        {
                            Name = "Reinhardt",
                            Abilities = new Dictionary<string, Ability>
                            {
                                { "Charge", new Ability { Name = "Charge" } },
                                { "Fire Strike", new Ability { Name = "Fire Strike" } },
                                { "Barrier", new Ability { Name = "Barrier" } },
                                { "Earth Shatter", new Ability { Name = "Earth Shatter" } }
                            }
                        }
                    }
                }
             }
        }
    };
}