# Web Scrapping from Tik Tok

## Backend (server.js):

We are scraping the TikTok homepage using axios and cheerio.
The scraper looks for video-feed-item class elements (adjust as per TikTok's current structure).
Data such as the video link, author name, title, and thumbnail is extracted and sent as a JSON response.

## Frontend (Search.js):

Uses axios to send a request to the backend with the search query.
Displays the list of videos with a link, thumbnail, title, and author name.

![Screenshot 2024-10-19 005318](https://github.com/user-attachments/assets/3b4b3ea1-bfc3-41d7-92a3-a99af89553a1)
