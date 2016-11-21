using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyAppWebApi.Models;

namespace MyAppWebApi.Controllers
{
    public class HeroesController : ApiController
    {
        private DAL.IRepository<Hero> repo = new DAL.HeroRepository();
        // GET api/hero
        public HttpResponseMessage Get()
        {
            var heroes = repo.Get();
            return this.Request.CreateResponse<IEnumerable<Hero>>(HttpStatusCode.OK, heroes);
        }

        // GET api/hero/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/hero
        public void Post([FromBody]string value)
        {
        }

        // PUT api/hero/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/hero/5
        public void Delete(int id)
        {
        }
    }
}
