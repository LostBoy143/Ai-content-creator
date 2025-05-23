import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ContentProvider } from "./context/ContentContext";
import TextArea from "./components/TextArea";
import RouteChangeHandler from "./components/RouteChangeHandler";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingFull";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RSS Feed Content Creator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ContentProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div className="flex mt-10 min-w-full h-screen overflow-hidden justify-between">
            <Sidebar />
            <div className="flex-1 flex flex-col md:flex-row justify-around overflow-y-auto">
              <div className="flex-1 p-10">
                <h2 className="py-5 px-5 text-xl block mb-4 font-medium text-gray-900 dark:text-white">
                  Here are your results 👇
                </h2>
                <Suspense fallback={<LoadingSpinner />}>
                  <RouteChangeHandler>{children}</RouteChangeHandler>
                </Suspense>
              </div>
              <TextArea />
            </div>
          </div>
        </body>
      </html>
    </ContentProvider>
  );
}
