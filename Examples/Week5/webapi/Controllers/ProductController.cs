using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

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
            return products;
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
            product.Id = 3;
            products.Add(product);
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

        static List<Product> products = new List<Product> {
            new Product {
                Id = 1,
                Name = "television",
                Price = 399.99M,
                Available = true
            },
            new Product {
                Id = 2,
                Name = "Recliner",
                Price = 199.99M,
                Available = false
            },
        };
    }
}
