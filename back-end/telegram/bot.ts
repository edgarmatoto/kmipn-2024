import { Bot } from "grammy";
import {configDotenv} from "dotenv";

configDotenv()

const bot = new Bot(process.env.TELEGRAM_TOKEN || "");

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

export default bot;
