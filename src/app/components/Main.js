import React from "react";
import FeedList from "./FeedList";

const Main = () => {
  return (
    <div className="pt-10 flex flex-col md:flex-row justify-around">
      <FeedList />
      <div className="pr-5 pt-5 flex flex-col ">
        <label className="text-xl block mb-4 font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <textarea
          className="bg-gray-800 p-2 rounded-sm"
          placeholder="Your optimized content will go here..."
          rows={36}
          cols={68}
        ></textarea>
      </div>
    </div>
  );
};

export default Main;
