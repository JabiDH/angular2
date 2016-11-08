using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using webapi.Models;

namespace webapi.Controllers
{
    public class HeroesController : ApiController
    {
        // GET api/heroes
        public IHttpActionResult Get(string callback)
        {
            var heroes = new List<Hero>();
            heroes.Add(new Hero { id = 1, name = "Hero_01" });
            heroes.Add(new Hero { id = 2, name = "Hero_02" });

            StringBuilder sb = new StringBuilder();
            //JavaScriptSerializer js = new JavaScriptSerializer();
            sb.Append(callback + "(");
            sb.Append(System.Web.Helpers.Json.Encode(heroes));
            sb.Append(");");  


            return Ok(sb.ToString());
        }

        // GET api/heroes/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/heroes
        public void Post([FromBody]string value)
        {
        }

        // PUT api/heroes/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/heroes/5
        public void Delete(int id)
        {
        }
    }
}
