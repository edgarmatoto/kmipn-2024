import express, {NextFunction, Router, Request, Response} from "express";
import connection from "../db/db";
import {FieldPacket, QueryError, QueryResult} from "mysql2";

const router: Router = express.Router();

function getTestData(): Promise<QueryResult> {
    const sql: string = 'SELECT * FROM `test`';

    return new Promise((resolve, reject) => {
        connection.query(sql, (err: QueryError | null, rows: QueryResult, fields: FieldPacket[]) => {
            if (err instanceof Error) {
                reject(err);
                return;
            }

            resolve(rows);
        });
    });
}

// GET /api/test
router.get('/', async function (req: Request, res: Response, next: NextFunction) {
    const testData = await getTestData();

    res.json({
        data: testData
    })
});

/* POST /api/test */
router.post('/', function(req: Request, res: Response, next: NextFunction) {
    const { question, optionA, optionB, optionC, optionD } = req.body;

    if (question && optionA && optionB && optionC && optionD) {
        const sql: string = 'INSERT INTO `test`(`question`, `option_a`, `option_b`, `option_c`, `option_d`) VALUES (?,?,?,?,?)';
        const values: Array<string | number> = [question, optionA, optionB, optionC, optionD];

        connection.execute(sql, values, (err, result, fields) => {
            if (err instanceof Error) {
                console.log(err);
                return;
            }
        });

        res.status(201).json({
            message: "Test successfully created"
        })
    } else {
        res.status(400).json({
            message: 'Missing required fields in request body'
        });
    }
});

export default router;
