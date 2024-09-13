import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
}));

app.use(express.static('public'));

const NEWS_API_KEY = '467ff3daf4cf473bb2b77d7b8e2e6ffc';

app.get('/', (req, res) => {
    res.send('Welcome to the News API server. Use /api/news to fetch the news.');
});

app.get('/api/news', async (req, res) => {
    try {
        const query = 'Horticulture Crops OR Agriculture';
        const page = req.query.page || 1; 
        const pageSize = 10; 
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&pageSize=${20}&page=${page}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
        const response = await axios.get(url);

        if (response.status !== 200) {
            res.status(response.status).json({ error: response.statusText });
            return;
        }

        res.json(response.data.articles); 
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
