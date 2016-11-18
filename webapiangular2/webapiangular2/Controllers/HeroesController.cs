using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class HeroesController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Hero> Get()
        {
            var heroes = new List<Hero>();
            var random = new Random();
            for (int i = 0; i < 10; i++)
            {
                heroes.Add(new Hero()
                {
                    Id = i + 1,
                    Name = "Hero_" + random.Next(999999)
                });
            }
            return heroes;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}