import express, {NextFunction, Router, Request, Response} from "express";
import {
    EnhancedGenerateContentResponse,
    GenerateContentResult,
    GenerativeModel,
    GoogleGenerativeAI
} from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/files";
import {configDotenv} from "dotenv";
import {sendMessageToConsultant, sendMessageToUser} from "../whatsapp/whatsapp";

configDotenv()

const router: Router = express.Router();

async function askGemini(testScore: string | number): Promise<any> {
    const fileManager = new GoogleAIFileManager(process.env.GEMINI_KEY || "");
    const uploadResult = await fileManager.uploadFile("soal.txt", {
        mimeType: "text/plain",
        displayName: "Soal Tes Kesehatan Mental",
    });

    const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GEMINI_KEY || "");
    const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const result: GenerateContentResult = await model.generateContent([
        {
            fileData: {
                mimeType: uploadResult.file.mimeType,
                fileUri: uploadResult.file.uri
            }
        },
        { text: `Kamu adalah seorang yang ahli dalam kesehatan mental. Peserta tes mendapatkan nilai akhir ${testScore}, berikan nasehat dan hal-hal lain yang berguna untuk menolong peserta.` },
    ]);
    const response: EnhancedGenerateContentResponse = await result.response;

    return response.text()
}

/* GET /api/ask */
router.get('/', async function (req: Request, res: Response, next: NextFunction): Promise<any> {
    const { testScore, phoneNumber, userName } = req.body;
    const scoreThreshold: number = 37;

    // const answer = await askGemini(testScore);

    // Send message to user
    await sendMessageToUser(phoneNumber, 'answer');

    // Send message to consultant if score pass the threshold
    if (testScore >= scoreThreshold) {
        const adviceMessage:string = `Kami sangat menyarankan Anda untuk berbicara dengan salah satu konsultan kesehatan mental untuk mendapatkan bantuan dan dukungan lebih lanjut. Anda dapat menghubungi konsultan kami di:

Nomor Kontak Konsultan: ${process.env.CONSULTANT_PHONE_NUMBER}

Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu Anda.

Salam,
Tim Kesehatan Mental`;
        await sendMessageToUser(phoneNumber, adviceMessage);
        await sendMessageToConsultant(testScore, userName, phoneNumber);
    }

    res.json({
        message: "Baik, jawaban anda telah disimpan. Kami akan menghubungi anda lebih lanjut melalui whatsapp yang sudah terdaftar."
    });
});

export default router;
