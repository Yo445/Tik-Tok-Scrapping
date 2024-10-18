import React, { useState } from "react";
import axios from "axios";
import { dotSpinner } from "ldrs";
dotSpinner.register();

const Search = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading status

  // Function to handle the search
  const handleSearch = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await axios.get(
        `http://localhost:5000/search?q=${query}`
      );
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching TikTok videos", error);
    } finally {
      setLoading(false); // Set loading to false after fetching is complete
    }
  };

  // Detect "Enter" key press and trigger search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-1">
      <div className="text-center p-6">
        <h1 className="gemini">TikTok Scraping</h1>
      </div>

      <div className="text-center p-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress} // Trigger search on "Enter" key press
              placeholder="Search TikTok videos..."
            />
            <div className="search"></div>
          </div>
        </form>
      </div>

      <div className="text-center p-6">
        {loading ? ( // Conditional rendering for loading
          <div className="loader-container">
            <l-dot-spinner
              size="60"
              speed="0.9"
              color="#ff0050"
            ></l-dot-spinner>
          </div>
        ) : (
          videos.map((video, index) => (
            <div key={index}>
              <div className="rounded overflow-hidden shadow-lg flex flex-col">
                <div className="relative">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                </div>
              </div>
              <div className="px-6 py-4 mb-auto">
                <p className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {video.title} - by {video.author}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;

// import React, { useState } from "react";
// import axios from "axios";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [videos, setVideos] = useState([]);

//   // Function to handle the search
//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/search?q=${query}`
//       );
//       setVideos(response.data);
//     } catch (error) {
//       console.error("Error fetching TikTok videos", error);
//     }
//   };

//   // Detect "Enter" key press and trigger search
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSearch(); // Trigger search when Enter is pressed
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-1">
//       <div className="text-center p-6">
//         <h1 className="gemini">TikTok Scraping</h1>
//       </div>

//       <div className="text-center p-6">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div className="input-container">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onKeyPress={handleKeyPress} // Trigger search on "Enter" key press
//               placeholder="Search TikTok videos..."
//             />
//             <div className="search"></div>
//           </div>
//         </form>
//       </div>

//       <div className="text-center  p-6">
//         {videos.map((video, index) => (
//           <div key={index}>
//             <div className="rounded overflow-hidden shadow-lg flex flex-col">
//               <div className="relative">
//                 <a href={video.url} target="_blank" rel="noopener noreferrer">
//                   <img src={video.thumbnail} alt={video.title} />
//                   <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//                 </a>
//               </div>
//             </div>
//             <div className="px-6 py-4 mb-auto">
//               <p className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
//                 {video.title}
//               </p>
//             </div>
//           </div>
//           //   <div key={index}>
//           //     <a href={video.url} target="_blank" rel="noopener noreferrer">
//           //       <img src={video.thumbnail} alt={video.title} />
//           //       <p>{video.title}</p>
//           //     </a>
//           //   </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

// <div className="container mx-auto mt-14 flex justify-center">
//       <div className="flex flex-nowrap">
//         <div className="row">
//           <h1 className="gemini">TikTok Scraping</h1>
//         </div>

//         <div className="row">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="input-container">
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyPress={handleKeyPress} // Trigger search on "Enter" key press
//                 placeholder="Search TikTok videos..."
//               />
//               <div className="search"></div>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="row">
//         {videos.map((video, index) => (
//           <div key={index}>
//             <div className="rounded overflow-hidden shadow-lg flex flex-col">
//               <div className="relative">
//                 <a href={video.url} target="_blank" rel="noopener noreferrer">
//                   <img src={video.thumbnail} alt={video.title} />
//                   <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
//                 </a>
//               </div>
//             </div>
//             <div className="px-6 py-4 mb-auto">
//               <p className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
//                 {video.title}
//               </p>
//             </div>
//           </div>
//           //   <div key={index}>
//           //     <a href={video.url} target="_blank" rel="noopener noreferrer">
//           //       <img src={video.thumbnail} alt={video.title} />
//           //       <p>{video.title}</p>
//           //     </a>
//           //   </div>
//         ))}
//       </div>
//     </div>
