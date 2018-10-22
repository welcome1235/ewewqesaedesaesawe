const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
/////////////////////////////////////////////

/////////////////////////////////////////////

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('💜 **Welcome To Server Toxic Shop** 🍃💎')
 
     .setFooter(`${member.guild.name}`)
        .setTimestamp()

      channel.sendEmbed(embed);
    });
client.token('NTAzODQ2MzQ1MTk1NTIwMDEx.Dq-mnA.06K5Lzl2zPWKgYqfbvPDOaX_B6I');
