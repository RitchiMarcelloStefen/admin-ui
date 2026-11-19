import { useState } from "react";

/* eslint-disable react/prop-types */
function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      onClick={() => setClicked(true)}
      className={`cursor-pointer rounded-lg p-6 shadow transition-colors hover:shadow-md ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="mb-3 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="leading-relaxed text-gray-600">{body}</p>
    </article>
  );
}

export default PostCard;