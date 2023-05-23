namespace HeroRandomizer.Models
{

public class Hero
{
    public string Name { get; set; } = default!;
    public Dictionary<string, Ability> Abilities { get; set; } = default!;
}
}