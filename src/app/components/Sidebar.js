import React from "react";

const Sidebar = () => {
  return (
    <aside className="pt-5 flex flex-col w-64 h-screen sticky top-0 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col p-3 flex-1 justify-between">
        <nav className="space-y-6">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase font-semibold text-base">Fields</h4>
            <div className="space-y-3">
              <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ">
                <a className="mx-2 text-sm font-medium">section</a>
              </div>
              <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ">
                <a className="mx-2 text-sm font-medium">section</a>
              </div>
              <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ">
                <a className="mx-2 text-sm font-medium">section</a>
              </div>
              <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ">
                <a className="mx-2 text-sm font-medium">section</a>
              </div>
              <div className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ">
                <a className="mx-2 text-sm font-medium">section</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
