
export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200);
        console.log(req.body);
    } else {
        res.status(400).send("Request failed.");
    }
}
