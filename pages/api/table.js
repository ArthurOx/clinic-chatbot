import { client } from "../../datastore";

export default async function handler(req, res) {
    if (req.method !== 'GET' && req.method !== 'POST') {
        res.status(405).send({ message: 'Unsupported request method' })
        return
    }
    if (req.method === 'GET') {
        const language = req.query.language;
        try {
            let response = await client
                .from('translations')
                .select('content')
                .eq('language', language)
            console.log(response);
            res.status(200).json({ message: response.data })
        } catch (error) {
            res.status(400).json({ message: "Something went wrong" })
        }
    } else {
        try {
            let response = await client
                .from('results')
                .insert(req.body)
            console.log(response);
            res.status(200).json({ message: response.data })
        } catch (error) {
            res.status(400).json({ message: "Something went wrong" })
        }
    }
}
