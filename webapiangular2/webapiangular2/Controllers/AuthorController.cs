using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webapiangular2.Controllers
{
    public class AuthorController : ApiController
    {
        // GET: api/Authors
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Authors/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Authors
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Authors/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Authors/5
        public void Delete(int id)
        {
        }
    }
}
