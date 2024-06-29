import WAWebJS, { Client, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import {configDotenv} from "dotenv";

configDotenv()

const client: Client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', (): void => {
    console.log('Client is ready!');
});

client.on('qr', (qr: string): void => {
    qrcode.generate(qr, {small: true});
});

// Listening to all incoming messages
client.on('message', async (message: WAWebJS.Message): Promise<void> => {
    if (message.body === '!ping') {
        // send back "pong" to the chat the message was sent in
        await client.sendMessage(message.from, 'pong');
    }
});

export async function sendMessageToUser(to: string, message: string): Promise<void> {
    const chatId: string = to + "@c.us";

    await client.sendMessage(chatId, message);
}

export async function sendMessageToConsultant(testScore: number, userName: string, phoneNumber: string): Promise<void> {
    const chatId: string = process.env.CONSULTANT_PHONE_NUMBER + "@c.us";
    const message: string = `
        Hai Konsultan,

        Terdapat seorang individu yang baru saja melakukan tes kesehatan mental dan mendapatkan skor ${testScore} yang menandakan kurang sehat. Berikut adalah detailnya:
        
        Nama: ${userName}
        Nomor Kontak: ${phoneNumber}
        
        Silakan segera hubungi individu tersebut untuk memberikan bantuan dan dukungan yang diperlukan.
        
        Terima kasih,
        Tim Pelayanan Kesehatan Mental
    `

    await client.sendMessage(chatId, message);
}

export default client;
