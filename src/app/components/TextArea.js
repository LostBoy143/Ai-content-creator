"use client";
import React from "react";
import { useMyContext } from "../context/ContentContext";

const TextArea = () => {
  const { state, dispatch } = useMyContext();
  return (
    <div className="p-8 w-full gap-2 max-w-fit lg:w-1/2 rounded-sm flex-5 flex-col dark:bg-gray-900 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <label className="text-xl block font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <button
          onClick={() => dispatch({ type: "REMOVE_DATA" })}
          className="py-1 px-2 rounded bg-gray-700 hover:bg-red-500 transition-colors transform duration-300"
        >
          Clear
        </button>
      </div>
      <textarea
        className="bg-gray-800 p-2 rounded-sm"
        value={state.content}
        placeholder="Your optimized content will go here..."
        rows={36}
        cols={68}
      ></textarea>
    </div>
  );
};

export default TextArea;
