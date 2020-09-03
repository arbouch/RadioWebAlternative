using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace WebRadioAlternative.Hubs
{
    public class HubM : Hub
    {
        public async Task PlayMusic()
        {
         //   var context = GlobalHost.ConnectionManager.GetHubContext<MyHub>();
         
            await Clients.All.SendAsync("ReceiveMusic");
           // await Clients.Caller.SendAsync("ReceiveMusic");

        }
    }
}
