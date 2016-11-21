using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using WebApiContrib.Formatting;

namespace MyAppWebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
			GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalConfiguration.Configuration.Formatters.Add(
                new WebApiContrib.Formatting.Jsonp.JsonpMediaTypeFormatter(
                    new System.Net.Http.Formatting.JsonMediaTypeFormatter()
                    )
                );
        }
    }
}