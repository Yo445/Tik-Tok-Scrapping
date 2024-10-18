# Web Scrapping from Tik Tok

## Backend (server.js):

We are scraping the TikTok homepage using axios and cheerio.
The scraper looks for video-feed-item class elements (adjust as per TikTok's current structure).
Data such as the video link, author name, title, and thumbnail is extracted and sent as a JSON response.

## Frontend (Search.js):

Uses axios to send a request to the backend with the search query.
Displays the list of videos with a link, thumbnail, title, and author name.

![1](https://github.com/user-attachments/assets/7615c5df-ee7e-4175-a8e0-24a99cd697ed)
