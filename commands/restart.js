const { spawn } = require('child_process');
module.exports = {
  name: "restart",
  description: "restart the bot",

  async execute(interaction) {

    const ownerID = '893038810902958130'
    if(interaction.user.id !== ownerID) {
        interaction.reply({content: `You don't have the permission to use this command.`, ephemeral: true})

    } else {

        try {

            interaction.reply({ content: `Restarting the bot ...`, ephemeral: true });
            const subprocess = spawn('start', ['cmd.exe', '/c', 'node main.js'], {
                shell: true
            });

            setTimeout(() => {
                process.exit();
            }, 5000);

        } catch (e) {
            console.log(e.message)
        }
        
    }
    
  }
};