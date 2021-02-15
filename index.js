const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Başarıyla  ${client.user.tag} giriş yaptı `);
});

client.login('Nzk1MzQxMjc5NTYyNDMyNTIy.X_H9SQ.wPNC1YSNhEL0K7q1rQM--MCa2-A');