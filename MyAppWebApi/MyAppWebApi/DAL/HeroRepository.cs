using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MyAppWebApi.Models;

namespace MyAppWebApi.DAL
{
    public class HeroRepository : IRepository<Hero>
    {
        private IEnumerable<Hero> Heroes;
        public HeroRepository()
        {
            IntizaliseHeroes();
        }

        private void IntizaliseHeroes()
        {
            var random = new Random();
            var heroes = new List<Hero>();
            for (int i = 0; i < 20; i++)
            {
                var hero = new Hero() { Id = i + 1, Name = "Hero_" + random.Next(999999) };
                heroes.Add(hero);
            }
            this.Heroes = heroes.ToList();
        }

        public IEnumerable<Hero> Get()
        {
            return this.Heroes.ToList();
        }
    }
}