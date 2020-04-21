using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DeveloperInterview.DataLayer;
using System.Data;

namespace DeveloperInterview.BusinessLayer
{
    public class Order
    {
        public int OrderId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public DateTime OrderDate { get; set; }

        public int CustomerId { get; set; }

        public int ProductRating { get; set; }

        public int Quantity { get; set; }


        public List<Order> GetOrders()
        {
            CRCDeveloperInterviewHandle handle = new CRCDeveloperInterviewHandle();
            DataTable dt = handle.GetOrders();

            List<Order> orderlist = new List<Order>();

            foreach (DataRow dr in dt.Rows)
            {
                orderlist.Add(
                    new DeveloperInterview.BusinessLayer.Order
                    {
                        CustomerId = Convert.ToInt32(dr["CustomerId"]),
                        FirstName = Convert.ToString(dr["FirstName"]),
                        LastName = Convert.ToString(dr["LastName"]),
                        OrderId = Convert.ToInt32(dr["OrderId"]),
                        Quantity = Convert.ToInt32(dr["Quantity"]),
                        ProductName = Convert.ToString(dr["Name"]),
                        ProductId = Convert.ToInt32(dr["ProductId"]),
                        Price = Convert.ToDecimal(dr["Price"]),
                        OrderDate = Convert.ToDateTime(dr["AddedDate"])
                    });
            }
            return orderlist;
        }

        public int CreateOrder(string FirstName, string LastName, Dictionary<int, int> products)
        {
            CRCDeveloperInterviewHandle handle = new CRCDeveloperInterviewHandle();
            return handle.AddOrder(FirstName, LastName, products);
        }

    }

}
