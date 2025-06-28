import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import postsData from "../data/posts.json";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData); 
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mb-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
