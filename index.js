const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;
if (token == null || token === '' || token === '<write_your_token_here>') {
    console.error('Define valid Telegram Bot API token!');
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const { id, is_bot, first_name, last_name, username, language_code } = msg.from;
    bot.sendMessage(chatId, `ID: ${id}\nUsername: @${username}\nBot: ${is_bot}\nFirst name: ${first_name}\nLast name: ${last_name}\nLanguage code: ${language_code}`);
});
