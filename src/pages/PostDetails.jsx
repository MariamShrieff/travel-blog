import React, { useState } from "react";
import { useParams } from "react-router-dom";
import postsData from "../data/posts.json";

// SVG icons
const featureIcons = {
  money: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75z"/>
    </svg>
  ),
  wifi: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.37 8.14c5.86-5.86 15.36-5.86 21.22 0l-.53.53a.75.75 0 01-1.06 0c-4.98-4.98-13.05-4.98-18.03 0a.75.75 0 01-1.06 0l-.53-.53zM4.55 11.32c4.1-4.1 10.75-4.1 14.85 0l-.53.53a.75.75 0 01-1.06 0 8.25 8.25 0 00-11.67 0 .75.75 0 01-1.06 0l-.53-.53zM7.75 14.5a6 6 0 018.49 0l-.53.53a.75.75 0 01-1.06 0 3.75 3.75 0 00-5.3 0 .75.75 0 01-1.06 0l-.53-.53z"/>
    </svg>
  ),
  bedrooms: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 10H3V6a1 1 0 011-1h4v2a1 1 0 002 0V5h4v2a1 1 0 002 0V5h4a1 1 0 011 1v4zM3 12v8h18v-8H3z"/>
    </svg>
  ),
  tv: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 4H3c-1.1 0-2 .9-2 2v10a2 2 0 002 2h6l-2 2v1h10v-1l-2-2h6a2 2 0 002-2V6c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  fire: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.96 2.29a.75.75 0 00-1.07-.14A9.74 9.74 0 008.35 8.04a7.55 7.55 0 01-2.78-2.13.75.75 0 00-1.15-.08A9 9 0 1015.68 4.53a7.46 7.46 0 01-2.72-2.24zM15.75 14.25a3.75 3.75 0 11-7.31-1.17 5.99 5.99 0 004.06-2.55 3.75 3.75 0 013.25 3.72z"/>
    </svg>
  ),
};

const PostDetails = () => {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === id);
  const [showImagePopup, setShowImagePopup] = useState(false);

  if (!post) {
    return <div className="text-center text-blue-600 py-10">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl h-[600px] rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        
        {/* Image Section */}
        <div className="w-full lg:w-2/5 h-[300px] lg:h-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover cursor-pointer"
            onClick={() => setShowImagePopup(true)}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 w-full lg:w-3/5 overflow-y-auto">
          <h6 className="mb-3 text-sm font-semibold uppercase text-blue-500">Destination</h6>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <div className="mb-4 text-yellow-600 font-semibold text-lg">⭐ {post.rating}</div>
          <p className="text-base text-gray-600 mb-4">{post.description}</p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">{post.details}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Features:</h3>
            <div className="flex flex-wrap gap-3">
              {post.features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                >
                  {featureIcons[feature] || "✔️"}
                  <span className="capitalize">{feature}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="#">
            <button className="flex items-center gap-2 rounded-lg py-3 px-6 text-xs font-bold uppercase text-white bg-blue-500 transition-all hover:bg-blue-600 active:bg-blue-700">
              Reserve Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Popup Image */}
      {showImagePopup && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex justify-center items-center">
          <div className="relative max-w-3xl w-[90%] bg-transparent rounded-md">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 text-lg flex items-center justify-center hover:bg-red-700"
              onClick={() => setShowImagePopup(false)}
            >
              &times;
            </button>
            <img src={post.image} alt="Full View" className="w-full h-[400px] object-cover rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
