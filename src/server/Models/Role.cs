namespace HeroRandomizer.Models
{

public class Role
{
    public string Name { get; set; } = default!;
    public List<Hero> Heroes { get; set; } = default!;
}
}