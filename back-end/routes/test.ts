import express, {NextFunction, Router, Request, Response} from "express";
import connection from "../db/db";
import {FieldPacket, QueryError, QueryResult} from "mysql2";

const router: Router = express.Router();

// get test data from db
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

// PUT /api/test
router.put('/', function(req: Request, res: Response, next: NextFunction) {
    const { id, question, optionA, optionB, optionC, optionD } = req.body;

    if (id && question && optionA && optionB && optionC && optionD) {
        const sql: string = 'UPDATE `test` SET `question`=?, `option_a`=?, `option_b`=?, `option_c`=?, `option_d`=? WHERE `id`=?';
        const values: Array<string | number> = [question, optionA, optionB, optionC, optionD, id];

        connection.execute(sql, values, (err, result, fields) => {
            if (err instanceof Error) {
                console.log(err);
                res.status(500).json({
                    message: "Failed to update test"
                });
                return;
            }

            res.status(200).json({
                message: "Test successfully updated"
            });
        });
    } else {
        res.status(400).json({
            message: 'Missing required fields in request body'
        });
    }
});

// DELETE request to delete a test by ID
router.delete('/', function(req, res, next) {
    const { id } = req.body;

    const sql: string = 'DELETE FROM `test` WHERE `id` = ?';
    connection.execute(sql, [id], (err: QueryError | null, result: QueryResult, fields: FieldPacket[]) => {
        if (err) {
            console.error('Error deleting test:', err);
            res.status(500).json({ message: 'Failed to delete test' });
            return;
        }

        // Success response
        res.status(200).json({ message: 'Test successfully deleted' });
    });
});

export default router;
