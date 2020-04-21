using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DeveloperInterview.BusinessLayer;

namespace DeveloperInterview.Website.Controllers
{
    public class ProductAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(new Product().GetProducts());
        }
    }
}