import React from "react";
import FeedItem from "./FeedItem";

const FeedList = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl block mb-4 font-medium text-gray-900 dark:text-white">
        Here are your results 👇
      </h2>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default FeedList;
