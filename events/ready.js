'use strict';

module.exports = {
    name: 'ready',
    execute: async function (client) {
      console.log(`${client.user.username} esta listo`);
      client.infoApp = await client.fetchApplication();
      setInterval(async () => {
        client.infoApp = await client.fetchApplication();
      }, 3600000);
    },
};
