using DeveloperInterview.DataLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeveloperInterview.BusinessLayer
{
    public class Product
    {
        public int ProductId { get; private set; }
        public string ProductName { get; private set; }
        public decimal Price { get; private set; }

        public List<Product> GetProducts()
        {
            CRCDeveloperInterviewHandle handle = new CRCDeveloperInterviewHandle();
            DataTable dt = handle.GetProducts();

            List<Product> productlist = new List<Product>();

            foreach (DataRow dr in dt.Rows)
            {
                productlist.Add(
                    new Product
                    {
                        ProductId = Convert.ToInt32(dr["Id"]),
                        ProductName = Convert.ToString(dr["Name"]),
                        Price = Convert.ToDecimal(dr["Price"])
                    });
            }

            return productlist;
        }

    }
}
