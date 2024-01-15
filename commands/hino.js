const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x00015E)
	.setTitle('𝘏𝘪𝘯𝘰 𝘥𝘰 𝘊𝘳𝘶𝘻𝘦𝘪𝘳𝘰 𝘌𝘴𝘱𝘰𝘳𝘵𝘦 𝘊𝘭𝘶𝘣𝘦!')
	.setDescription(
        'Existe um grande clube na cidade \n Que mora dentro do meu coração \n Eu vivo cheio de vaidade \n Pois na realidade é um grande campeão! \n\n Nos gramados de Minas Gerais \n Temos páginas heroicas e imortais \n Cruzeiro, Cruzeiro querido \n Tão combatido, jamais vencido!'
    )
	.setImage('https://i.imgur.com/5swTXSv.jpeg')
	.setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hino")
        .setDescription("Hino do Cruzeiro Esporte Clube."),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}