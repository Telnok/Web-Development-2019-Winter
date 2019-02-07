using System.Collections.Generic;

namespace Database
{
    public static class InMemory
    {
        public static List<Product> products = new List<Product> {
            new Product {
                Id = 1,
                Name = "Television",
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