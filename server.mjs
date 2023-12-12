// Express server code
import express from 'express';
import serveStatic from 'serve-static';

const app = express();
const port = 3000;

const tvShows = [
    { show: 'Breaking Bad', keywords: ['crime', 'drama', 'chemistry'] },
    { show: 'Stranger Things', keywords: ['science fiction', 'horror', 'mystery'] },
    { show: 'Jujustu Kaisen', keywords: ['fantsay', 'action', 'anime'] }
    // Add more shows...
];

app.use(serveStatic('public'));

app.get('/api/WebsitePg2', (req, res) => {
    const userKeywords = req.query.keywords.toLowerCase().split(' ');
    const recommendedShow = tvShows.find(show => show.keywords.some(keyword => userKeywords.includes(keyword)));
    
    if (recommendedShow) {
        res.header('Content-Type', 'application/json');
        res.json({ show: recommendedShow.show });
    } else {
        res.status(404).json({ error: 'No recommendation found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
