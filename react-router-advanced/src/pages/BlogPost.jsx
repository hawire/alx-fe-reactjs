import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Showing post with id: <strong>{postId}</strong></p>
      {/* In a real app, fetch post data using postId */}
    </div>
  );
}
