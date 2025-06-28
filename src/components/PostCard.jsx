import { Link } from "react-router-dom";
import React from "react";

const iconsMap = {
  money: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
      <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
    </svg>
  ),
  wifi: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.37 8.14c5.86-5.86 15.36-5.86 21.21 0a.75.75 0 010 1.06l-.53.53a.75.75 0 01-1.06 0c-4.98-4.98-13.05-4.98-18.03 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.18 3.18c4.1-4.1 10.75-4.1 14.85 0a.75.75 0 010 1.06l-.53.53a.75.75 0 01-1.06 0 8.25 8.25 0 00-11.67 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zM7.76 14.5a6 6 0 018.48 0 .75.75 0 010 1.06l-.53.53a.75.75 0 01-1.06 0 3.75 3.75 0 00-5.3 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06z" />
      <path d="M11.01 17.69a1.5 1.5 0 012.12 0 .75.75 0 010 1.06l-.53.53a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06z"></path>
    </svg>
  ),
  bedrooms: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.18 0l-8.69 8.69a.75.75 0 101.06 1.06l8.69-8.69z"></path>
      <path d="M12 5.43l8.16 8.16c.03.03.06.06.09.09v6.2a1.88 1.88 0 01-1.87 1.87H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.63A1.88 1.88 0 013.75 19.88v-6.2a2.29 2.29 0 01.09-.09L12 5.43z"></path>
    </svg>
  ),
  tv: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M19.5 6h-15v9h15V6z"></path>
      <path fillRule="evenodd" d="M3.38 3C2.34 3 1.5 3.84 1.5 4.88v11.25c0 1.03.84 1.87 1.88 1.87H9.75v1.5H6a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-3.75V18h6.38c1.03 0 1.87-.84 1.87-1.87V4.88C22.5 3.84 21.66 3 20.63 3H3.38z" clipRule="evenodd"></path>
    </svg>
  ),
  fire: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.96 2.29a.75.75 0 00-1.07-.14 9.74 9.74 0 00-3.54 6.18 7.55 7.55 0 01-1.71-3.61.75.75 0 00-1.15-.08 9 9 0 1010.02 0 7.46 7.46 0 01-2.72-2.25zM15.75 14.25a3.75 3.75 0 11-7.31-1.17 6.48 6.48 0 002.13 1 5.99 5.99 0 011.93-3.54 3.75 3.75 0 013.26 3.71z" clipRule="evenodd" />
    </svg>
  ),
};

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col bg-white text-gray-700 shadow-lg rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md mx-auto transition-all">
      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="h-[250px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-xl font-semibold">{post.title}</h5>
            <p className="text-blue-600 font-medium text-base">⭐ {post.rating}</p>
          </div>
          <p className="text-gray-700 text-sm">{post.description}</p>
        </div>

        {/* Features */}
        <div className="mt-2 flex flex-wrap gap-2">
          {post.features?.slice(0, 5).map((feature, index) => (
            <span
              key={index}
              className="rounded-full border border-blue-500/10 bg-blue-100 p-2 text-blue-500 hover:bg-blue-200 transition"
            >
              {iconsMap[feature] || "+"}
            </span>
          ))}
          {post.features?.length > 5 && (
            <span className="rounded-full border border-blue-500/10 bg-blue-100 p-2 text-blue-500">
              +{post.features.length - 5}
            </span>
          )}
        </div>

        {/* Button */}
        <Link to={`/post/${post.id}`}>
          <button className="mt-4 w-full rounded-lg bg-blue-500 py-3 text-sm font-bold uppercase text-white hover:bg-blue-600 transition">
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
