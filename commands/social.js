const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const socialEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('𝘖 𝘊𝘢𝘣𝘶𝘭𝘰𝘴𝘰 𝘯𝘢𝘴 𝘙𝘦𝘥𝘦𝘴 𝘚𝘰𝘤𝘪𝘢𝘪𝘴 🦊🌐')
	.setDescription(
        "Site Oficial: https://cruzeiro.com.br \n Instagram: https://instagram.com/cruzeiro \n Twitter: https://twitter.com/Cruzeiro \n Facebook: https://facebook.com/cruzeirooficial \n Youtube: https://youtube.com/user/OficialCruzeiro \n TikTok: https://tiktok.com/@cruzeiro \n\n Nossa Comunidade no Twitter: https://twitter.com/DiscordCEC" 
    )
    .setThumbnail('https://i.imgur.com/5swTXSv.jpeg')
	.setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("social")
        .setDescription("Acesse as redes sociais."),

    async execute(interaction) {
        await interaction.reply({ embeds: [socialEmbed] })
    }
}