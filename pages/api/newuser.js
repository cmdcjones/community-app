
export default function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        res.status(200).json(`${body}`);
    } else {
        res.status(400).send("Request failed.");
    }
}
