const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    // Launch Puppeteer in non-headless mode for debugging
    const browser = await puppeteer.launch({ 
      headless: false, // To see what's happening in the browser
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();

    // Set a user agent to avoid bot detection
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    );

    // Set a viewport to simulate a desktop browser
    await page.setViewport({ width: 1280, height: 800 });

    // Navigate to the TikTok search page with the query
    await page.goto(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`, {
      waitUntil: 'networkidle2',
    });

    // Wait for videos to load on the page (adjust selector if necessary)
    await page.waitForSelector('.video-feed-item', { timeout: 15000 });

    // Debugging: Log the HTML content of the page to verify loading
    const html = await page.content();
    console.log(html); // Check if page content is loaded properly

    // Extract video data
    const videos = await page.evaluate(() => {
      const videoElements = document.querySelectorAll('.video-feed-item');
      return Array.from(videoElements).map(video => {
        const linkElement = video.querySelector('.cover-inner-wrap a');
        const link = linkElement ? linkElement.getAttribute('href') : null;

        const authorElement = video.querySelector('.author-name a');
        const author = authorElement ? authorElement.innerText : null;

        const titleElement = video.querySelector('.video-title-content');
        const title = titleElement ? titleElement.innerText : null;

        return { link, author, title };
      });
    });

    // Close the browser
    await browser.close();

    // Send back the scraped video data
    res.json(videos);
  } catch (error) {
    console.error('Error fetching TikTok videos:', error);
    res.status(500).json({ message: 'Error fetching TikTok videos' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const html = await page.content();
console.log(html);







// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.get('/search', async (req, res) => {
//   const query = req.query.q;

//   try {
//     // Make an HTTP request to TikTok with the search query
//     const response = await axios.get(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`);

//     // Parse the HTML response using Cheerio
//     const $ = cheerio.load(response.data);

//     // Extract data from the page
//     const videos = $('.video-feed-item').map((i, video) => {
//       const link = $('.cover-inner-wrap a', video).attr('href');
//       const author = $('.author-name a', video).text();
//       const title = $('.video-title-content', video).text();
//       const thumbnail = $('.cover-inner-wrap img', video).attr('src'); // Extract thumbnail image if available

//       return {
//         link: `https://www.tiktok.com${link}`,  // Create full link
//         author,
//         title,
//         thumbnail,
//       };
//     }).get();

//     res.json(videos);  // Send the scraped video data to the frontend
//   } catch (error) {
//     console.error('Error fetching TikTok videos:', error);
//     res.status(500).json({ message: 'Error fetching TikTok videos' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });









// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.get('/search', async (req, res) => {
//   const query = req.query.q;

//   try {
//     const response = await axios.get(`https://www.tiktok.com/search?q=${encodeURIComponent(query)}`);
//     const html = response.data;
//     const $ = cheerio.load(html);

//     // Scrape relevant data (e.g., video URLs, descriptions, thumbnails)
//     let videos = [];
//     $('div.video-feed-item').each((index, element) => {
//       const video = {
//         title: $(element).find('.video-title').text(),
//         url: $(element).find('a').attr('href'),
//         thumbnail: $(element).find('img').attr('src'),
//       };
//       videos.push(video);
//     });

//     res.json(videos);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching TikTok videos' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
