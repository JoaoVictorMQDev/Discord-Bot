const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("email")
        .setDescription("Email do servidor."),

    async execute(interaction) {
        await interaction.reply("**Nosso email:** `cecdiscord1921@gmail.com` :inbox_tray:")
    }
}