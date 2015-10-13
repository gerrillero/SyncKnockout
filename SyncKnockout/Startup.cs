using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SyncKnockout.Startup))]
namespace SyncKnockout
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
