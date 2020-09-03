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
            await Clients.All.SendAsync("ReceiveMusic");
 
        }
    }
}
