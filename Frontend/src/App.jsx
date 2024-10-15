function App() {
  return (
    <div className=" w-screen full-height">
      <div className="container mx-auto mt-14 flex justify-center">
        <div>
          <h1 className="gemini ">Tik Tok Scrapping</h1>
          <div class="input-container">
            <input type="text" placeholder="Search..." />
            <div class="search"></div>
          </div>
          {/* <div className="w-3/4 border hover:bg-slate-600 border-slate-500 rounded-full h-12 mx-auto mt-10 hover:border-none flex justify-between">
            <p className="p-3 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </p>
            <input
              className="w-4/5 bg-transparent text-slate-200 placeholder:text-2xl focus:border-none focus:outline-none"
              type="search"
              placeholder=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
