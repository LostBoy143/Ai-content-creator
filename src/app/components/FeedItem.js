import React from "react";

const FeedItem = ({ item }) => {
  return (
    <div className="flex flex-col space-x-3 space-y-1 text-gray-600 transition-colors p-4 duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
      <div className="flex ">{item?.title}</div>
      <div className="p-3 space-x-3">
        <button className="font-medium text-blue-600 background-transparent outline-none focus:outline-none mr-1 pb-1">
          expand..
        </button>
        <button className="font-medium text-blue-600 background-transparent outline-none focus:outline-none mr-1 pb-1">
          blog..
        </button>
        <button className="font-medium text-blue-600 background-transparent outline-none focus:outline-none mr-1 pb-1">
          tweet..
        </button>
      </div>
    </div>
  );
};

export default FeedItem;
