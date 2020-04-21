using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DeveloperInterview.BusinessLayer;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DeveloperInterview.Website.Controllers
{

    public class OrderAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(new Order().GetOrders());
        }

        public HttpResponseMessage Post(JObject objData)
        {
            Dictionary<int, int> products = new Dictionary<int, int>();
            dynamic jsonData = objData;

            string firstName = jsonData.FirstName;
            string lastName = jsonData.LastName;
            List<dynamic> productsList = jsonData.products.ToObject<List<dynamic>>();

            foreach (dynamic product in productsList)
            {
                products.Add((int)product.ProductId.Value, (int)product.Quantity.Value);
            }

            return ToJson(new Order().CreateOrder(firstName, lastName, products));
        }
    }
}
