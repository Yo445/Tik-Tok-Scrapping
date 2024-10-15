const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`);
    const html = response.data;
    const $ = cheerio.load(html);

    // Scrape relevant data (e.g., video URLs, descriptions, thumbnails)
    let videos = [];
    $('div.video-feed-item').each((index, element) => {
      const video = {
        title: $(element).find('.video-title').text(),
        url: $(element).find('a').attr('href'),
        thumbnail: $(element).find('img').attr('src'),
      };
      videos.push(video);
    });

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching TikTok videos' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
