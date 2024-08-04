"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "./LoadingFull";

export function NavigationEvents({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // Simulate loading state change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );
}

export default NavigationEvents;
