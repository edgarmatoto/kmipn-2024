import express, {NextFunction, Router, Request, Response} from "express";
import {
    EnhancedGenerateContentResponse,
    GenerateContentResult,
    GenerativeModel,
    GoogleGenerativeAI
} from "@google/generative-ai";
import {configDotenv} from "dotenv";
import {sendMessage} from "../whatsapp/whatsapp";

configDotenv()

const router: Router = express.Router();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(process.env.GEMINI_KEY || "");
const model: GenerativeModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run(question: string): Promise<any> {
    const result: GenerateContentResult = await model.generateContent(question);
    const response: EnhancedGenerateContentResponse = await result.response;

    return response.text()
}

/* GET users listing. */
router.get('/', async function (req: Request, res: Response, next: NextFunction): Promise<any> {
    // const answer = await run("berikan nasehat singkat untuk orang dengan gangguan mental");

    await sendMessage("6282191141646", "answer");

    res.send("Baik, jawaban anda telah disimpan. Kami akan menghubungi anda lebih lanjut melalui whatsapp yang sudah terdaftar.");
});

export default router;
