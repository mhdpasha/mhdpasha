"use client"

const NoScript = () => {
  return (
    <noscript>
      <div className="fixed inset-0 w-full h-full bg-black/75 backdrop-blur-md flex items-center justify-center p-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg max-w-md w-full border border-white/30 animate-fade-in animate-once animate-duration-500 animate-ease-out">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Oh no! The magic is paused</h1>
            
            <div className="h-px w-24 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 my-4"></div>
            
            <p className="text-gray-800 text-center mt-2 font-medium">
              Hi there! My portfolio comes alive with JavaScript. 
              It's how all the cool interactions and animations work!
            </p>
            
            <p className="text-gray-700 text-center mt-3">
              To see my creative work in its full glory, please enable JavaScript.
            </p>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-xl w-full text-gray-700 shadow-sm border border-blue-100">
              <p className="font-medium mb-2 text-blue-800">Quick steps to unlock the experience:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Open your browser settings</li>
                <li>Find the JavaScript option (usually in Privacy/Security)</li>
                <li>Toggle it on</li>
                <li>Refresh to see my portfolio come alive!</li>
              </ol>
            </div>
            
            <p className="mt-5 text-sm text-blue-600 font-medium">
              Thanks for visiting! Can't wait to show you what I've created.
            </p>
          </div>
        </div>
      </div>
    </noscript>
  );
};

export default NoScript;