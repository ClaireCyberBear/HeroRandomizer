using HeroRandomizer.Entities;
using Microsoft.EntityFrameworkCore;

namespace HeroRandomizer.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { 
        }
        public DbSet<Hero> Heroes { get; set;}
    }
}