using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Database;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Product>> Get()
        {
            return getProducts();
        }

        private List<Product> getProducts()
        {
            return InMemory.products;
        }   

        // // GET api/values/5
        // [HttpGet("{id}")]
        // public ActionResult<string> Get(int id)
        // {
        //     return "value";
        // }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Product product)
        {
            product.Id = getNextId();

            InMemory.products.Add(product);
        }

        private int getNextId()
        {
            return InMemory.products.Max(p => p.Id) + 1;
        }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
