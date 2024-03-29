import { getDb } from "./db";
export default async function getSenior(req, res) {
    const dbconnection = await getDb();
    try {
        const query = "SELECT * FROM SENIOR";
        const value = [];
        const [data] = await dbconnection.execute(query, value);
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
